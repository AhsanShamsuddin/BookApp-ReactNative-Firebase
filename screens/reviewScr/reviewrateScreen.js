import React, { Component } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    FlatList
} from 'react-native';
import styles from './reviewrateStyle';
import { Thumbnail, Content, Form, Textarea, Button, Container } from 'native-base';
import StarRating from 'react-native-star-rating';
import auth from '@react-native-firebase/auth';
import { Paragraph } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import Modal from 'react-native-modal';
import database from '@react-native-firebase/database';

const user = auth().currentUser;
export default class ReviewRateScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: '',
            visible: false,
            cRating: 1,
            reviewText: '',
            reviewsData: [],
            allRating: [],
        }
    }

    componentDidMount() {
        auth().onAuthStateChanged((users) => {
            if (users) {
                this.setState({ user: users });

                const allReviews = database().ref("AllReviews").child(this.props.route.params.bookTitle);
                allReviews.on("value", data => {
                    if (data.exists()) {
                        let data1 = data.val();
                        let item = Object.values(data1);
                        this.setState({ reviewsData: item });
                    }
                });
            }
        });

    }

    addReviewnRating() {
        this.setState({ visible: true })
    }

    onStarRatingPress(rating) {
        this.setState({
            cRating: rating
        });
    }

    getReviewText(val) {
        this.setState({
            reviewText: val
        });
    }

    onSaveReviewPress() {
        if (this.state.reviewText != '') {


            this.setState({
                visible: false
            });

            database()
                .ref('AllReviews')
                .child(this.props.route.params.bookTitle)
                .child(this.state.user.uid)
                .set({
                    review: this.state.reviewText,
                    rating: this.state.cRating,
                    bookTitle: this.props.route.params.bookTitle,
                    email: this.state.user.email,
                })
                .then(() => console.log('Data set.'));

            const allReviews1 = database().ref("AllReviews").child(this.props.route.params.bookTitle);
            allReviews1.orderByChild("rating").on("value", data => {
                if (data.exists()) {
                    var reviewCount = data.numChildren();
                    console.log("Review Count = " + this.state.reviewsCount);
                    
                    var sum = 0;
                    const allReviews2 = database().ref("AllReviews").child(this.props.route.params.bookTitle);
                    allReviews2.orderByChild("rating").on("child_added", data => {
                        if (data.exists()) {
                            sum = eval(sum + data.val().rating);
                            var avg = eval((sum / reviewCount));

                            database()
                                .ref('AvgRatings')
                                .child(this.props.route.params.bookTitle)
                                .set({
                                    avgRating: avg
                                })
                                .then(() => console.log('Data set.'));
                        }
                    });
                }

            });

            this.setState({ reviewText: '' })
        }
    }

    renderReviews = ({ item, index }) => {

        return (
            <View style={styles.rectangle}>
                <View style={styles.titleContainer}>
                    <View>
                        <Text style={styles.title} numberOfLines={1}> {item.bookTitle} </Text>
                    </View>

                    <View style={styles.ratingContainer} >
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            fullStarColor={'#FFCE00'}
                            rating={item.rating}
                            starSize={13}
                            containerStyle={styles.bookRating}
                        />
                    </View>
                </View>

                <View>
                    <View>
                        <Text style={styles.uemail}> {item.email} </Text>
                    </View>
                    <View>
                        <Paragraph numberOfLines={3} style={styles.paragraph}>
                            {item.review}
                        </Paragraph>
                    </View>
                </View>

            </View>
        )
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View>
                    <Thumbnail square style={styles.thumb} source={{ uri: this.props.route.params.image }} />
                </View>

                <View >
                    <FAB
                        style={styles.fab}
                        icon="plus"
                        onPress={() => this.addReviewnRating()}
                    />
                </View>

                <Container>
                    <View>
                        <FlatList
                            data={this.state.reviewsData}
                            scrollEventThrottle={60}
                            showsHorizontalScrollIndicator={false}
                            renderItem={this.renderReviews}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>

                </Container>


                <View>
                    <Modal isVisible={this.state.visible}>
                        <View style={styles.rectangle1}>
                            <View>

                                <View>
                                    <Text style={styles.modalTitle}>
                                        Add Review And Rating
                                    </Text>

                                    <StarRating containerStyle={{ marginLeft: 10, marginTop: 20, marginBottom: 15 }}
                                        disabled={false}
                                        maxStars={5}
                                        fullStarColor={'#FFCE00'}
                                        rating={this.state.cRating}
                                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                                    />

                                </View>

                                <Content padder>
                                    <Form>
                                        <Textarea rowSpan={5} bordered placeholder="Write your Review Here" onChangeText={(val) => this.getReviewText(val)} />
                                    </Form>
                                </Content>

                            </View>
                        </View>
                        <View style={{ marginTop: 30 }}>
                            <Button block success onPress={() => this.onSaveReviewPress()}>
                                <Text style={{ color: '#fff', fontSize: 18 }} >Save Review!</Text>
                            </Button>
                        </View>

                    </Modal>
                </View>

            </SafeAreaView>
        )
    }
}
