import React, { Component, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import styles from './favScreenStyles';
import { firebase } from '@react-native-firebase/auth';
import { ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default class FavScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      favsData: [],
      user: ''
    }
  }

  componentDidMount() {
    auth().onAuthStateChanged((users) => {
      if (users) {
        this.setState({ user: users })

        const allFavs = firebase.database().ref(users.uid);
        allFavs.on("value", data => {
          if(data.exists()){
            let data1 = data.val();
            let item = Object.values(data1);
            this.setState({ favsData: item });
          }
        });

      }
    });
  }

  deletefav = (title) => {
    firebase.database().ref(''+this.state.user.uid+'/'+title).remove();
  }

  renderFavsLayout = ({ item, index }) => {
    return (
      <View style={styles.rectangle}>
        <View>
          <Image style={styles.bookimage} source={{ uri: item.image }} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.deletefav(item.title)}>
            <Image style={styles.cross} source={require('../../assets/CrossIcon.png')} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }


  render() {
    return (
      <SafeAreaView>

        <View>
          <View style={styles.head}>
            <Text style={styles.header1}>Your</Text>
            <Text style={styles.header}> Favorite Books</Text>
          </View>

          <FlatList
            data={this.state.favsData}
            scrollEventThrottle={60}
            showsHorizontalScrollIndicator={false}
            renderItem={this.renderFavsLayout}
            keyExtractor={(item, index) => index.toString()}
          />

        </View>

      </SafeAreaView>
    )

  }


}
