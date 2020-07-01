import React, { Component, useState } from 'react';
import auth from '@react-native-firebase/auth';

export default class RegAuth extends Component{
    
    signUpUser(username, password, confirmPassword){
        if(password !== confirmPassword){
            alert("Password are not Equal")
            return;
        }
        else{
            auth()
            .createUserWithEmailAndPassword(username , password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    alert('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    alert('That email address is invalid!');
                }

                console.error(error);
            });
        }
    }

}