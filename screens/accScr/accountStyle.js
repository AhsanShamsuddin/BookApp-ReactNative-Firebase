import {
    StyleSheet,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

    DP: {
        alignSelf: 'center',
        marginTop: hp('10%'),
    },
    Email: {
        borderWidth: 2,
        borderColor: '#A7A7A7',
        borderRadius: 70,
        paddingLeft: wp('5%'),
        fontFamily: "HelveticaNeue Light",
        paddingRight: wp('5%'),
        fontSize: wp('4.7%'),
        textAlign: "center",
        height: hp('6%'),
        width: wp('54%'),
        marginTop: 10,
        alignSelf: "center",
    },
    UserID: {
        borderWidth: 2,
        borderColor: '#A7A7A7',
        borderRadius: 70,
        paddingLeft: wp('5%'),
        fontFamily: "HelveticaNeue Light",
        paddingRight: wp('5%'),
        fontSize: wp('4.7%'),
        textAlign: "center",
        height: hp('6%'),
        width: wp('54%'),
        marginTop: 10,
        alignSelf: "center",
    },
    btn: {
        width: wp('38%'),
        height: hp('7%'),
        alignSelf: 'center',
        backgroundColor: '#09849A',
        fontFamily: "HelveticaNeue Light",
        borderRadius: 20,
        marginTop: hp('5%')

    },
    eText: {
        fontSize: wp('3.8%'),
        marginTop: 10,
        marginLeft: wp('10%'),
        fontWeight:'bold',
    },
    rectangle: {
        width: wp('70%'),
        height: hp('15%'),
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        marginTop: hp('4%'),
        alignSelf: "center",
    }

})

export default styles;