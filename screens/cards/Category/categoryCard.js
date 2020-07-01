import React, { Component, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
} from 'react-native';
import { Paragraph  } from 'react-native-paper';
import styles from './categoryCardStyles';

export default class CategoryCard extends Component{

    render(){

        return(
            <View>
                <View style={styles.container}>
                    <View style={styles.square}>

                        <Image 
                            style={styles.bookImage}
                            source={{uri: this.props.items.image}}
                        />

                        <Paragraph numberOfLines={1} style={styles.BookTitle}>{this.props.items.title}</Paragraph>
                        <Text style={styles.BookCategory}>{this.props.items.category}</Text>
                    </View>
                </View>
            </View>
        )
    }

}

