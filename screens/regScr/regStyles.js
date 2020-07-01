import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    view: {
        marginTop: 50,
    },
    ellipse: {
        opacity: 1,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        width: 544,
        height: 414,
        alignSelf: "center",
        top: -139
    },
    skitaplogoRemovebgPreview: {
        width: 153,
        height: 115,
        alignSelf: "center",
        top: -517, 
    },
    circle: {
        width: 121,
        height: 121,
        alignSelf: "center",
        top: -400,        
    },
    box: {
        width: 293,
        height: 450,
        borderRadius: 60/2,
        backgroundColor: '#FFF',
        top: -510,
        elevation:4,
        shadowOffset: { width: 5, height: 5 },
        shadowColor: "grey",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        alignSelf: "center",
    },
    email: {
        borderWidth: 2, 
        borderColor: '#A7A7A7',  
        borderRadius: 68/2,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        fontFamily: "HelveticaNeue Light",
        textAlign: "center",
        height: 47,
        width: 213,
        marginTop: 20,
        alignSelf: "center",
    },
    password: {
        borderWidth: 2, 
        borderColor: '#A7A7A7',  
        borderRadius: 68/2,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
        fontFamily: "HelveticaNeue Light",
        textAlign: "center",
        height: 47,
        width: 213,
        marginTop: 20,
        alignSelf: "center"
    },
    signup: {
        flexDirection: "row",
        fontSize: 15,
        fontFamily: "HelveticaNeue Light",
        top: -475,
        textAlign: "center",
        color: "#A7A7A7",
    },
    signinWith: {
        fontSize: 15,
        fontFamily: "HelveticaNeue Light",
        marginTop: 20,
        textAlign: "center",
        color: "#A7A7A7",
    },
    signupbtn: {
        width: 163,
        height: 47,
        marginTop: 30,
        alignSelf: "center",
    },
    sociallogo: {
        width: 163,
        height: 16,
        alignSelf: "center",
        marginTop: 30,
    },
    group: {
        width: 16.05,
        height: 17.39,
        alignSelf: "center",
        marginTop: 30,
    }

})

export default styles;