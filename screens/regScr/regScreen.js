import React, { Component, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import styles from './regStyles';
import RegAuth from './regAuth';
import { useNavigation } from '@react-navigation/native';

export default function RegisterScreen(){

            const navigation = useNavigation();

            const [email, setEmail] = useState('');
            const [password, setPassword] = useState('');
            const [confirmPassword, setConfirmPassword] = useState('');

            function RegisterUser(){
                if(email != '' && password != '' && confirmPassword != ''){
                    new RegAuth().signUpUser(email, password, confirmPassword);
                    navigation.navigate('SignIn')
                }
                else{
                    alert('Please Enter All Fields')
                }
            }


            return(
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
                            <TextInput
                                style={styles.password}
                                placeholder = "Confirm Paasword"
                                secureTextEntry={true}
                                onChangeText={(val) => setConfirmPassword(val)}
                            />

                            <TouchableOpacity onPress={() => RegisterUser()}>

                                <Image
                                    style={styles.signupbtn}
                                    source = {require('../../assets/RegBtn.png')}
                                />
                            </TouchableOpacity>

                            <Text style={styles.signinWith}>Or Sign in with</Text>

                            <Image
                                style={styles.sociallogo}
                                source = {require('../../assets/sociallogo.png')}
                            />

                        </View>

                        <Text style={styles.signup}>Already Have an Account?
                            <Text style={{ color: "#007084" }} 
                                onPress={() => navigation.navigate('SignIn')}>
                                Sign In
                            </Text>
                        </Text>

                </View>
            )
    }
