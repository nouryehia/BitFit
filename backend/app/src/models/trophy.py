"""
Description: Recieves data from the middleware, and makes the correct Pyrebase
API calls to update data about the user's trophies in Firebase.
Contains error checking for errors in calls to Firebase.

Authors: Jeffrey
"""

# External imports
from flask import make_response, jsonify  # Flask packages
from requests.exceptions import HTTPError  # To access HTTPError

# Internal imports
from ...config import db, auth, create_error_message


class Trophy:
    """
    This class acts as the trophy model for our database. It contains all the
    methods related to trophies in the firebase database.
    """

    @classmethod
    def get_all_trophies(cls):
        """
            Retrieves every single trophy in the trophy database.

            Returns:
                A dictionary in which the keys correspond to a trophy id and
                its value corresponds to its actual trophy data.
        """
        trophies = {}
        for data in db.child("trophies").get().each():
            trophies[data.key()] = data.val()

        return trophies

    @staticmethod
    def get_user_trophies(uid: str):
        """
            Retrieves all of the user's trophies. Adds a description field for
            each trophy returned that contains the actual information about
            the trophy itself.

            Arguments:
                uid {int}: The user's unique id.

            Returns:
                response_object -> If valid call, returns the list of user's
                trophies and a 200 status code.
                Otherwise, returns a blank body and an error code.
        """
        # get all trophies from the trophies table
        all_trophies = Trophy.get_all_trophies()

        # gets all trophies specific to the user
        # results = db.child("earned_trophies").order_by_child("uid").equal_to(uid).get()

        # trophies = []
        # for troph in results.each():
        # get the data for this specific user trophy
        # data = troph.val()

        # include another field that includes the trophy details
        # to avoid an extra API call on front-end
        # data["details"] = all_trophies[data["trophy_id"]]
        # trophies.append(data)

        trophies = []
        try:
            # get all the trophies specific to the user
            results = db.child("earned_trophies").child(uid).get()

            for troph in results.each():
                # get the data for this specific user trophy
                data = troph.val()
                # get the trophy name
                name = troph.key()

                # include another field that includes the trophy details
                # to avoid an extra API call on front-end
                data["details"] = all_trophies[name]
                # add this as well since the name is not initially included
                data["details"]["name"] = name

                trophies.append(data)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)

        return make_response(trophies, 200)

    @staticmethod
    def update_user_trophies(uid: str, date: str):
        """
        Description

        Arguments:

        Returns:
        """
        try:
            # get the number of completed workouts
            completed_workouts = db.child("completed_workouts").child(uid).get().val()
            numCompleted = len(completed_workouts)

            # update the specific trophy for this user in the earned users table
            earned_trophies = db.child("earned_trophies").child(uid).get().val()

            # get a list of trophies
            trophies = db.child("trophies").get().val()

            # update the users trophy if they earned it
            for trophy in trophies:
                if numCompleted >= trophies[trophy]["num_completed"]:
                    data = {"date_earned": date}
                    db.child("earned_trophies").child(uid).child(trophy).update(data)

            return make_response({}, 200)

        except HTTPError as e:
            # Handle exception and return correct response object
            return create_error_message(e)
