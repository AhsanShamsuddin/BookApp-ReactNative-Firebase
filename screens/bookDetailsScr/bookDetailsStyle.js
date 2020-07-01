import {
    StyleSheet,
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  const styles = StyleSheet.create({
    thumb: {
        width:"100%",
        height: hp('50%'),
    },
    title: {
        fontFamily: 'CircularStd-Bold',
        fontSize: wp('5.5%'),
        margin: 25,
        lineHeight: 28,
        color: "#0B0B0B",
        width: "50%",
    },
    favIcon: {
        alignSelf: 'flex-end',
        marginRight: 30,
        marginTop: -310,
    },
    fab: {
        position: 'absolute',
        marginRight: 10,
        right: 10,
        bottom: 10,
        backgroundColor: '#FF3232'
      },
    bookRating: {
        width: wp('20%'),
        height: hp('3%'),
    },
    category: {
      fontSize: wp('3.5%'),
      fontFamily: 'CircularStd-Book',
      color: "#007084",
      lineHeight: 14,
      marginTop: 38,
      marginLeft: -58,
    },
    ratingContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-end',
        marginRight: 50,
        marginTop: -63
    },
    titleContainer: {
        alignSelf: 'flex-start'
    },
    paragraph: {
        margin: 30,
        marginTop: 30,
        fontFamily: 'CircularStd-Book',
        lineHeight: 31,
        fontSize: wp('4%'),
        color: "#7F8589",
    },
    readBook: {
        width: wp('80%'),
        height: hp('7%'),
        margin: 20,
        backgroundColor: "#007084",
        alignItems: 'center',
        fontSize: 16
    },
    rectangle: {
      width: wp('85%'),
      height: hp('7%'),
      backgroundColor: '#02A6C4',
      marginLeft: wp('7%'),
      borderRadius: 10,
      marginBottom: hp('1%'),
      marginTop:hp('3%'),
      flexDirection:'row',
    },
    play:{
      color:'white',
      marginLeft: wp('7%'),
      marginTop: hp('1.5%'),
    },
    line: {
      width: wp('50%'),
      height: hp('0.1%'),
      backgroundColor: 'white',
      marginLeft: wp('4%'),
      borderRadius: 2,
      marginBottom: hp('1%'),
      marginTop:hp('3.2%'),
      flexDirection:'row',
    },
    Hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    }
  })
  
  export default styles;