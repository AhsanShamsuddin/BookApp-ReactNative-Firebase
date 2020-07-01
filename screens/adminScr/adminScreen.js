import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    StatusBar,
    TextInput,
} from 'react-native';
import { Paragraph } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import { Container, Header, Body, Right, Button, Icon, Title, Toast } from 'native-base';
import styles from './adminScreenStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import database from '@react-native-firebase/database';

export default class AdminScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bookTitle: '',
            bookDescription: '',
            bookCategory: '',
            bookReadUrl: '',
            bookImageUrl: 'url'
        }
    }

    bookSave() {
        if (this.state.bookTitle != '' && this.state.bookDescription != '' && this.state.bookCategory != '' && this.state.bookReadUrl != '' && this.state.bookImageUrl != '') {
            console.log("Filled")

            database()
                .ref('Books')
                .push()
                .set({
                    category: this.state.bookCategory,
                    description: this.state.bookDescription,
                    title: this.state.bookTitle,
                    rating: 1,
                    readUrl: this.state.bookReadUrl,
                    image: this.state.bookImageUrl
                })
                .then(() => this.clearFields());
        }
        else {
            alert('Fill All The Fields');
        }
    }

    clearFields(){
        this.setState({
            bookTitle: '',
            bookDescription: '',
            bookCategory: '',
            bookReadUrl: '',
            bookImageUrl: 'url'
        })
    }

    render() {
        return (
            <View>
                <Container>
                    <Header style={styles.header}>
                        <StatusBar hidden={true} />
                        <Body style={{ marginLeft: 20 }}>
                            <Title>Admin Panel</Title>
                        </Body>
                        <Right>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate("AdminAllBooks")}>
                                <Button transparent >
                                    <Icon name="book" />
                                </Button>
                            </TouchableOpacity>
                        </Right>
                    </Header>
                </Container>

                <View style={styles.square}>
                    <View style={styles.BookText}>
                        <Text style={styles.BookTitle} numberOfLines={1}>
                            {this.state.bookTitle}
                        </Text>

                        <Paragraph numberOfLines={5} style={styles.bookDescription}>
                            {this.state.bookDescription}
                        </Paragraph>

                        <View style={styles.ratingContainer}>

                            <StarRating
                                disabled={true}
                                maxStars={5}
                                fullStarColor={'#FFCE00'}
                                rating={1}
                                starSize={13}
                                containerStyle={styles.bookRating}
                            />

                            <Text style={styles.category}>{this.state.bookCategory}</Text>

                        </View>

                    </View>

                    <View>
                        <Image
                            style={styles.bookImage}
                            source={{ uri: this.state.bookImageUrl }}
                        />
                    </View>
                </View>
                <View>
                    <TextInput
                        style={styles.email}
                        placeholder="Title"
                        keyboardType="email-address"
                        onChangeText={(val) => this.setState({ bookTitle: val })}
                    />

                    <TextInput
                        style={styles.password}
                        placeholder="Description"
                        onChangeText={(val) => this.setState({ bookDescription: val })}
                    />
                    <TextInput
                        style={styles.password}
                        placeholder="Category"
                        onChangeText={(val) => this.setState({ bookCategory: val })}
                    />
                    <TextInput
                        style={styles.password}
                        placeholder="Reading URL"
                        onChangeText={(val) => this.setState({ bookReadUrl: val })}
                    />
                    <TextInput
                        style={styles.password}
                        placeholder="Book Image URL"
                        onChangeText={(val) => this.setState({ bookImageUrl: val })}
                    />
                </View>

                <View style={styles.Addbtn} >
                    <Button rounded block success onPress={() => this.bookSave()} >
                        <Text style={{ color: 'white' }}>Add Book</Text>
                    </Button>
                </View>
            </View>
        )

    }

}