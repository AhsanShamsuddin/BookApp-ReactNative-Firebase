import React, { Component, useState, useEffect } from 'react';
import {
  View,
  Image,
  TextInput,
  Text
} from 'react-native';
import styles from './accountStyle';
import { Button } from 'react-native-paper'
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

export default function AccountScreen({navigation}) {

  const [user, setUser] = useState('');

  useEffect(() => {
    auth().onAuthStateChanged((users) => {
      if (users) {
        setUser(users);
      }
    });
  })

  function userSignout() {
    if (user.uid != null) {
      auth().signOut().then(() => navigation.navigate('SignIn'))
    }
  }

  return (
    <View>
      <View style={styles.DP}>
        <Image source={require('../../assets/accountDP.png')} style={{width:150, height:150}} />
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.eText}>
          Email:</Text>
        <TextInput editable={false} style={styles.Email}
          placeholder="Email">
          {user.email}
        </TextInput>
      </View>
      <View style={styles.rectangle}>
        <Text style={styles.eText}>
          UID:</Text>
        <TextInput editable={false} style={styles.UserID}
          placeholder="User ID">
          {user.uid}
        </TextInput>
      </View>
      <View>
        <Button style={styles.btn}
          contentStyle={{ paddingTop: 6 }}
          icon="exit-to-app"
          mode="contained"
          onPress={() => userSignout()}> LOGOUT
        </Button>
      </View>
    </View>
  )

}
