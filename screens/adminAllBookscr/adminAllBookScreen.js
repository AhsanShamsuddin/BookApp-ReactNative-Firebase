import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    ActivityIndicator
} from 'react-native';
import { firebase } from '@react-native-firebase/auth';
import styles from './adminAllBookStyle';
import { Paragraph } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';


export default class AdminAllBooks extends Component {

    constructor(props) {
        super(props);

        this.state = {
            booksData: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        const allBooks = firebase.database().ref("Books");
        allBooks.on("value", data => {
            this.setState({ booksData: Object.values(data.val()) })
            this.setState({ isLoaded: true });
        });
    }

    renderAllBooksLayout = ({ item, index }) => {
        return (
            <View style={styles.square}>
                <View style={styles.BookText}>
                    <Text style={styles.BookTitle} numberOfLines={1}>
                        {item.title}
                    </Text>

                    <Paragraph numberOfLines={3} style={styles.bookDescription}>
                        {item.description}
                    </Paragraph>

                    <View style={styles.ratingContainer}>

                        <StarRating
                            disabled={true}
                            maxStars={5}
                            fullStarColor={'#FFCE00'}
                            rating={item.rating}
                            starSize={13}
                            containerStyle={styles.bookRating}
                        />

                        <Text style={styles.category}>{item.category}</Text>

                    </View>

                </View>

                <View>
                    <Image
                        style={styles.bookImage}
                        source={{ uri: item.image }}
                    />
                </View>
            </View>
        )
    }

    render() {
        if (!this.state.isLoaded) {
            return (
                <View style={styles.activityIndicator}>
                    <ActivityIndicator size="large" color="#007084" animating={true} />
                </View>
            )
        }
        else {
            return (
                <Container>
                    <Header style={styles.header}>
                        <Body style={{ marginLeft: 20 }}>
                            <Title>All Books</Title>
                        </Body>
                    </Header>
                    <FlatList
                        data={this.state.booksData}
                        scrollEventThrottle={60}
                        showsVerticalScrollIndicator={false}
                        renderItem={this.renderAllBooksLayout}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Container>
            )
        }
    }
}