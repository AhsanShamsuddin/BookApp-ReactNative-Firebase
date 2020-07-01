import {
    StyleSheet,
} from 'react-native';
import { shadow } from 'react-native-paper';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    thumb: {
        width: "100%",
        height: hp('50%'),
    },
    titleContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    title: {
        fontFamily: 'CircularStd-Bold',
        fontSize: hp('3%'),
        marginTop: hp('2%'),
        marginLeft:wp('8%'),
        lineHeight: 28,
        color: "#0B0B0B",
        width: wp('55%'),
    },
    ratingContainer: {
        marginRight: 50,
        marginTop: 20
    },
    rectangle1: {
        width: 330,
        height: 330,
        backgroundColor: 'white',
        borderRadius: 20,
        alignSelf:'center',
        alignItems:'center',
        alignContent:'center',
    },
    bookRating: {
        width: wp('10%'),
        height: wp('3%'),
    },
    newRating: {
        width: wp('10%'),
        height: hp('10%'),
        alignSelf: 'center',
        marginTop: 20,
    },
    uemail: {
        marginTop: hp('7%'),
        width: wp('70%'),
        height: hp('4%'),
        fontSize: hp('2%'),
        color: "#007084",
        fontFamily: 'CircularStd-Book'
    },
    fab: {
        position: 'absolute',
        marginRight: 10,
        right: 10,
        bottom: 10,
        backgroundColor: '#0687F8'
    },
    rectangle: {
        width: wp('85%'),
        height: hp('30%'),
        backgroundColor: 'white',
        marginLeft: wp('5%'),
        marginTop: hp('3%'),
        borderRadius: 20,
        marginBottom: hp('2%'),
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2,
    },
    paragraph: {
        width: wp('70%'),
        marginTop: 7,
        fontFamily: 'CircularStd-Book',
        lineHeight: 31,
        marginRight: wp('6%'),
        fontSize: hp('2%'),
        color: "#7F8589",
    },
    emailContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    txtinp:{
        marginLeft:8,
        marginTop:hp('5%'),
    },
    modalTitle: {
        textAlign:'center',
        marginTop: hp('2%'),
        marginBottom: hp('2%'), 
        fontSize: wp('7%'),
        fontFamily: 'CircularStd-Bold',
    }
})

export default styles;