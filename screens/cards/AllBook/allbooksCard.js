import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { Paragraph  } from 'react-native-paper';
import StarRating from 'react-native-star-rating';
import styles from './allbookCardStyle';

export default class AllBooksCardLayout extends Component{
    render() {
        
        return(
            <View>
                <View style={styles.square}>
                    <View style={styles.BookText}>
                            

                            <Text style={styles.BookTitle} numberOfLines={1}>
                                {this.props.items.title}
                            </Text>
                            
                            <Paragraph numberOfLines={4} style={styles.bookDescription}> 
                                {this.props.items.description}
                            </Paragraph>

                            <View style={styles.ratingContainer}>

                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    fullStarColor={'#FFCE00'}
                                    rating={this.props.items.rating}
                                    starSize={13}
                                    containerStyle={styles.bookRating}
                                />
                                
                                <Text style={styles.category}>{this.props.items.category}</Text>

                            </View>

                    </View>
                    
                    <View>
                        <Image 
                            style={styles.bookImage}
                            source={{uri: this.props.items.image}}
                        />
                    </View>

                    
                </View>

                

            </View>
        )

    }
}