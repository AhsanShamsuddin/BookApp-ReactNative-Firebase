import React, { Component, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from 'react-native';
import styles from './loginStyles';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import Spinner from 'react-native-loading-spinner-overlay';

function LoginScreen(){

        const navigation = useNavigation();

        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const [spinner, setSpinner] = useState(false);

        function checkSignIn(){

                setSpinner(true);

                if(email != '' && password != ''){
                    auth().signInWithEmailAndPassword(email, password)
                    .then(() => {
                        if(auth().currentUser.uid == "fgnAnVnlrJYEH0LB08k6A4ANj8J2"){
                            setSpinner(false);
                            navigation.navigate('AdminScreen');
                        }
                        else{
                            console.log('Logged In Success');
                            setSpinner(false);
                            navigation.navigate('BottomNav');
                        }
                    })
                    .catch(function(error) {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        } else {
                            alert(errorMessage);
                        }
                        console.log(error);
                        setSpinner(false);
                    });
                }
                else{
                    setSpinner(false);
                    alert('Please Enter Name & Password');
                }
                
        }
        
        return(

            <View >

                <View style={styles.container}>
                    <Spinner
                        visible={spinner}
                        textContent={'Loading...'}
                        textStyle={styles.spinnerTextStyle}
                    />
                </View>

                <View style={styles.view}>
                    <StatusBar translucent backgroundColor="transparent" />

                        <Image 
                            style={styles.ellipse}
                            source={require('../../assets/ellipse3.png')}
                        />

                        <Image 
                            style={styles.circle}
                            source={require('../../assets/circle.png')}
                        />

                        <Image 
                            style={styles.skitaplogoRemovebgPreview}
                            source={require('../../assets/Booklogo.png')}
                        />

                        <View style={styles.box}>

                            <Image
                                style={styles.group}
                                source = {require('../../assets/group.png')}
                            />

                            <TextInput 
                                style={styles.email}
                                placeholder="Email"
                                keyboardType="email-address"
                                onChangeText={(val) => setEmail(val)}
                            />

                            <TextInput 
                                style={styles.password}
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={(val) => setPassword(val)}
                            />

                            <TouchableOpacity onPress={() => checkSignIn()}>

                                <Image
                                    style={styles.signinBtn}
                                    source = {require('../../assets/signinbtn.png')}
                                />
                            </TouchableOpacity>

                            <Text style={styles.signinWith}>Or Sign in with</Text>

                            <Image
                                style={styles.sociallogo}
                                source = {require('../../assets/sociallogo.png')}
                            />

                        </View>

                        <Text style={styles.signup}>Dont Have an Account?..
                            <Text style={{ color: "#007084" }}
                                onPress={() => navigation.navigate('SignUp')}>
                                Sign Up
                            </Text>
                        </Text>
                    </View>
            </View>
        )   

}

export default LoginScreen;
