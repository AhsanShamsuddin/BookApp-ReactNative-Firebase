import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    Linking,
} from 'react-native';
import styles from './bookDetailsStyle';
import { Paragraph, Button } from 'react-native-paper';
import { Thumbnail, Icon } from 'native-base';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import StarRating from 'react-native-star-rating';
import { FAB } from 'react-native-paper';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import SoundPlayer from 'react-native-sound-player'

const user = auth().currentUser;

export default class BookDetailsScreen extends Component {

    _onFinishedPlayingSubscription = null
    _onFinishedLoadingSubscription = null
    _onFinishedLoadingURLSubscription = null

    constructor(props) {
        super(props);

        this.state = {
            readUrl: '',
            user: '',
            reviewsCount: 0,
            avgRating: 0,
            isPressed: false
        }
    }

    componentDidMount() {
        auth().onAuthStateChanged((users) => {
            if (users) {
                this.setState({ user: users })

                const allReviews1 = database().ref("AvgRatings").child(this.props.route.params.title);
                allReviews1.orderByChild("rating").on("value", data => {
                    if (data.exists()) {
                        this.setState({ avgRating: data.val().avgRating })
                    }
                });

            }
        });

        _onFinishedPlayingSubscription = SoundPlayer.addEventListener('FinishedPlaying', ({ success }) => {
            console.log('finished playing', success)
          })
          _onFinishedLoadingSubscription = SoundPlayer.addEventListener('FinishedLoading', ({ success }) => {
            console.log('finished loading', success)
          })
          _onFinishedLoadingURLSubscription = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
            SoundPlayer.play();
            console.log('finished loading url', success, url)
          })

    }

    componentWillUnmount() {
        _onFinishedPlayingSubscription.remove()
        _onFinishedLoadingSubscription.remove()
        _onFinishedLoadingURLSubscription.remove()
    }

    _fabOnClick = () => {
        let userRef = database().ref(this.state.user.uid);
        userRef.child(this.props.route.params.title)
            .set({ title: this.props.route.params.title, category: this.props.route.params.category, image: this.props.route.params.image });
    }

    playAudioBook() {
        this.setState({ isPressed: true })

        try {
            SoundPlayer.playUrl('https://etc.usf.edu/lit2go/audio/mp3/the-adventures-of-huckleberry-finn-002-chapter-1.99.mp3')

        } catch (e) {
            alert('Cannot play the file')
            console.log('cannot play the song file', e)
        }
    }

    pauseAudioBook(){
        this.setState({ isPressed: false })
        try {
            SoundPlayer.stop();
        }
        catch (e) {
            alert('Cannot pause the file')
            console.log('cannot pause the song file', e)
        }
    }

    render() {

        return (
            <SafeAreaView>

                <ScrollView>

                    <View>
                        <Thumbnail square style={styles.thumb} source={{ uri: this.props.route.params.image }} />
                    </View>

                    <View >
                        <FAB
                            style={styles.fab}
                            icon="heart"
                            onPress={() => this._fabOnClick()}
                        />
                    </View>

                    <View>

                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{this.props.route.params.title}</Text>
                        </View>

                        <View style={styles.ratingContainer} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("ReviewnRate", {
                                image: this.props.route.params.image,
                                bookTitle: this.props.route.params.title
                            })}>
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    fullStarColor={'#FFCE00'}
                                    rating={this.state.avgRating}
                                    starSize={13}
                                    containerStyle={styles.bookRating}
                                />
                            </TouchableOpacity>
                            <Text style={styles.category}>{this.props.route.params.category}</Text>

                        </View>

                        <View style={styles.rectangle}>
                            <TouchableOpacity onPress={() => this.playAudioBook()}> 
                                {/* style={this.state.isPressed ? styles.Hidden : styles.show}> */}
                                <Icon name="play" style={this.state.isPressed ? styles.Hidden : styles.play}></Icon>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.pauseAudioBook()}>
                                <Icon name="pause" style={this.state.isPressed ? styles.play : styles.Hidden}></Icon>
                            </TouchableOpacity>
                            <View style={styles.line}></View>
                        </View>

                    </View>

                    <View style={styles.descriptionContainer}>

                        <Paragraph style={styles.paragraph}>
                            {this.props.route.params.description}
                        </Paragraph>

                    </View>

                    <View style={{ flexDirection: 'row', margin: 20 }}>
                        <Button mode="" labelStyle={{ fontSize: wp('4%'), color: "#fff" }} contentStyle={{ marginTop: hp('0.5%') }} style={styles.readBook} onPress={() => Linking.openURL(this.props.route.params.readUrl)}>
                            Read More
                        </Button>
                    </View>
                </ScrollView>

            </SafeAreaView>
        )
    }
}
