import {
    StyleSheet,
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    square: {
        width: wp('82%'),
        height: hp('18%'),
        backgroundColor: '#fff',
        marginTop: hp('5%'),
        borderRadius: 8,
        marginLeft: wp('8%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    BookTitle: {
        fontSize: wp('5%'),
        fontFamily: 'CircularStd-Bold',
        lineHeight: 19,
        marginBottom: 5,
    },
    bookDescription: {
        fontSize: wp('3%'),
        fontFamily: 'CircularStd-Book',
        lineHeight: 18,
        width: wp('50%'),
        color: "#7F8589",
    },
    BookText: {
        marginLeft: wp('25%'),
        marginTop: 10,
    },
    bookRating: {
        width: wp('4%'),
        height: hp('2%'),
        marginTop: hp('1.2%'),
    },
    category: {
        fontSize: wp('3%'),
        fontFamily: 'CircularStd-Book',
        color: "#007084",
        lineHeight: 14,
        marginTop: hp('1.5%'),
        marginLeft: wp('19%'),
    },
    ratingContainer: {
        flexDirection: "row",
    },
    book1: {
        width: 91,
        height: 134,
    },
    BookImage: {
        marginLeft: 5,
    },
    bookImage: {
        width: wp('22%'),
        height: hp('18%'),
        marginTop: hp('-17%'),
    },
    header:{
        backgroundColor:"#007084",
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
    },
})

export default styles;