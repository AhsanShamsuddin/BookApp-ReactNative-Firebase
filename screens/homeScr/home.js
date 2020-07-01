import React, { useState, useEffect, Component } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import styles from './homeStyles';
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Searchbar } from 'react-native-paper';
import AllBooksCardLayout from '../cards/AllBook/allbooksCard';
import CategoryCard from '../cards/Category/categoryCard';
import database from '@react-native-firebase/database';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import loadash from 'lodash';

var user = auth().currentUser;

export default class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      booksData: [],
      booksCategoryDataComedy: [],
      booksCategoryDataMystery: [],
      booksCategoryDataAnthology: [],
      searchData: [],
      newData: [],
      isLoaded: false,
      isLoaded1: false,
      user: '',
    }
  }

  componentDidMount() {
    auth().onAuthStateChanged((users) => {
      if (users) {
        this.setState({ user: users })

        const allBooks = firebase.database().ref("Books");
        allBooks.on("value", data => {
          this.setState({ booksData: Object.values(data.val()), searchData: Object.values(data.val()) })
          this.setState({ isLoaded: true });
        });

        const allBooksCatComedy = firebase.database().ref("Books");
        allBooksCatComedy.orderByChild('category').equalTo('Comedy').on('value', (snapshot) => {
          let data = snapshot.val();
          let item = Object.values(data);
          this.setState({ booksCategoryDataComedy: item });

        });

        const allBooksCatAntho = firebase.database().ref("Books");
        allBooksCatAntho.orderByChild('category').equalTo('Anthology').on('value', (snapshot) => {
          let data = snapshot.val();
          let item = Object.values(data);
          this.setState({ booksCategoryDataAnthology: item });

        });

        const allBooksCatMyst = firebase.database().ref("Books");
        allBooksCatMyst.orderByChild('category').equalTo('Mystery').on('value', (snapshot) => {
          let data = snapshot.val();
          let item = Object.values(data);
          this.setState({ booksCategoryDataMystery: item });
          this.setState({ isLoaded1: true });

        });
      }
    });
  }

  searchText(text) {
    const formatedText = text.toLowerCase();
    const data = loadash.filter(this.state.searchData, book => {
      if (book.title.toLowerCase().includes(formatedText)) {
        return true
      }
    });
    if (data != null) {
      this.setState({ booksData: data })
    }
  }

  _renderBooksData = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("BookDetail", {
        image: item.image,
        title: item.title,
        description: item.description,
        rating: item.rating,
        category: item.category,
        readUrl: item.readUrl,
      })}>
        <AllBooksCardLayout items={item} />
      </TouchableOpacity>
    )
  }

  _renderBooksCategoryData = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("BookDetail", {
        image: item.image,
        title: item.title,
        description: item.description,
        rating: item.rating,
        category: item.category,
        readUrl: item.readUrl,
      })}>
        <CategoryCard items={item} />
      </TouchableOpacity>
    )
  }

  render() {

    if (!this.state.isLoaded || !this.state.isLoaded1) {
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#007084" animating={true} />
        </View>
      )

    }
    else {

      return (

        <SafeAreaView>

          <View>

          </View>

          <ScrollView scrollEventThrottle={60} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>

              <Searchbar
                style={styles.searchbar}
                placeholder="Search"
                onChangeText={(val) => this.searchText(val)}
              />

              <View style={styles.emailContainer}>

                <Text style={styles.emailtxt}>
                  Hi {this.state.user.email},
                      </Text>

              </View>

              <View style={styles.square}>
                <Text style={styles.bookshelf}>Your {'\n'}BookShelf</Text>

                <Image
                  style={styles.bookread}
                  source={require('../../assets/bookread.png')}
                />

              </View>

              <View style={styles.allbookSection}>
                <Text style={styles.allbooksTxt}>
                  All Books
                </Text>
                <View style={styles.underline} />
              </View>

              <FlatList
                data={this.state.booksData}
                horizontal
                scrollEventThrottle={60}
                showsHorizontalScrollIndicator={false}
                renderItem={this._renderBooksData}
                keyExtractor={(item, index) => index.toString()}
              />

              <View style={styles.allbookSection}>
                <Text style={styles.catergoryName}>Comedy</Text>
                <View style={styles.underline} />
              </View>

              <FlatList
                data={this.state.booksCategoryDataComedy}
                horizontal
                scrollEventThrottle={60}
                showsHorizontalScrollIndicator={false}
                renderItem={this._renderBooksCategoryData}
                keyExtractor={(item, index) => index.toString()}
              />

              <View style={styles.allbookSection}>
                <Text style={styles.catergoryName}>Mystery</Text>
                <View style={styles.underline} />
              </View>

              <FlatList
                data={this.state.booksCategoryDataMystery}
                horizontal
                scrollEventThrottle={60}
                showsHorizontalScrollIndicator={false}
                renderItem={this._renderBooksCategoryData}
                keyExtractor={(item, index) => index.toString()}
              />

              <View style={styles.allbookSection}>
                <Text style={styles.catergoryName}>Anthology</Text>
                <View style={styles.underline} />
              </View>

              <FlatList
                data={this.state.booksCategoryDataAnthology}
                horizontal
                scrollEventThrottle={60}
                showsHorizontalScrollIndicator={false}
                renderItem={this._renderBooksCategoryData}
                keyExtractor={(item, index) => index.toString()}
              />

            </View>
          </ScrollView>
        </SafeAreaView>
      )


    }

  }

}
