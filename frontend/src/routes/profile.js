import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from "react-native";

import styles from '../style/r_profile';
import Input from "../components/input";
import Button from "../components/button";
import TextField from "../components/text_field";
import profilePhoto from "../images/profile.png";
import { Actions } from 'react-native-router-flux';

/* 
TODO:
- disable save button if no changes made OR if one field is emty
- edit password field
- edit photo fnality
- Make all text centered
- Add logout fnality
*/

export default function Profile() {
    const [name, setName] = useState('First Last');
    const [username, setUsername] = useState('username');
    const [email, setEmail] = useState('user@email.com');
    const [sessions, setSessions] = useState(5);
    const [hours, setHours] = useState(20);
    const [editMode, setEditMode] = useState(false);

    // D for displayed
    const [nameD, setNameD] = useState(name);
    const [usernameD, setUsernameD] = useState(username);
    const [emailD, setEmailD] = useState(email);
    const [sessionsD, setSessionsD] = useState(sessions);
    const [hoursD, setHoursD] = useState(hours);

    const goBack = () => {
        Actions.progress()
    }

    const goToLogIn = () => {
        Actions.login()
    }

    return (editMode ? (
        <View style={styles.profileContainer}>
        <View style={styles.form}>
            <Image source={profilePhoto} style={styles.photo} />
            <Button label='EDIT PHOTO' />

            <TextField>
            Number of Sessions: {sessionsD}     |     Time working out: {hoursD}
            </TextField>
            <Button label='RESET STATS' onPress={() => {
                setSessionsD(0);
                setHoursD(0);
            }} />

            <Input
                placeholder={name}
                onChangeText={name => setNameD(name)}
                defaultValue={name} />
            <Input
                placeholder={username}
                onChangeText={username => setUsernameD(username)}
                defaultValue={username} />
            <Input
                placeholder={email}
                onChangeText={email => setEmailD(email)}
                defaultValue={email}
            />

            <Button label='SAVE' onPress={() => {
                setName(nameD);
                setUsername(usernameD);
                setEmail(emailD);
                setSessions(sessionsD)
                setHours(hoursD)
                setEditMode(false);
            }} />
            <Button label='CANCEL' onPress={() => {
                setNameD(name);
                setUsernameD(username);
                setEmailD(email);
                setSessionsD(sessions)
                setHoursD(hours)
                setEditMode(false);
            }} />
        </View>
        </View>

    ) : (
        <View style={styles.profileContainer}>
            <View style={{ marginRight: 310 }}>
            <TouchableOpacity onPress={() => goBack()}>
                <Image
                    style={{ width: 75, height: 75 }}
                    source={require('../images/back_button.png')}
                />
            </TouchableOpacity>
            </View>
            <View style={styles.form}>
            <Image source={profilePhoto} style={styles.photo} />
            <TextField>
                Number of Sessions: {sessionsD}     |     Time working out: {hoursD}
            </TextField>

            <TextField> Name: {nameD} </TextField>
            <TextField> Username: {usernameD} </TextField>
            <TextField> E-mail: {emailD} </TextField>

            <Button label='EDIT PROFILE' onPress={() => { setEditMode(true) }} />
            <Button
                label={'LOGOUT'}
                onPress={() => goToLogIn()}
            />
            </View>
        </View>
    ));
}