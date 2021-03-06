/**
 * Stylesheet for the trophy page.
 * 
 * Authors: ?
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    spinnerTextStyle: {
        color: '#FFF'
    },
    spinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    container: {
        backgroundColor: '#e7e7e7',
        marginTop: 0,
        alignItems: 'center',
    },
    progressbar: {
        marginTop: 13,
    },
    buttonStyle: {
        marginTop: 10,
        marginBottom: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#212143',
        borderRadius: 10,
        borderColor: '#fff',
    },
    buttonTextStyle: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 0,
        color: '#fff',
    },
    headerStyle: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center',
        fontWeight: '100',
        marginTop: "-10%"
    },
    whiteBox1: {
        backgroundColor: 'white',
        width: "93%",
        height: 75,
        paddingTop: "10%",
        paddingBottom: "120%",
        marginVertical: "0%",
        marginHorizontal: 5,
        borderRadius: 20,
        marginTop: "-1%"
    },
    textStyle: {
        fontSize: 20,
        paddingTop: "0%",
        textAlign: 'center',
        fontWeight: '100',
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 40,
        flexWrap: 'wrap',
        flexShrink: 1,
    },
    box: {
        fontSize: 36,
        textAlign: 'center',
        fontWeight: '100',
        borderWidth: 2,
        marginLeft: 20,
        marginRight: 20,
    },
    elementsContainer: {
        backgroundColor: '#ecf5fd',
        marginLeft: 24,
        marginRight: 24,
        marginBottom: 24,
    },
    topButton: {
        width: 55,
        height: 55,
        borderRadius: 150,
    },
});
