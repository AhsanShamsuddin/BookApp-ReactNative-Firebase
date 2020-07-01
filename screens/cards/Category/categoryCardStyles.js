import {
    StyleSheet,
  } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  
  const styles = StyleSheet.create({
    
    square: {
      width: wp('22%'),
      height: hp('22%'),
      backgroundColor: '#fff',
      marginTop: hp('3%'),
      borderRadius: 8,
      marginLeft: wp('3%'),
    },
    bookImage: {
      width: wp('22%'),
      height: hp('16%'),
    },
    BookTitle: {
      fontSize: wp('3%'),
      fontFamily: 'CircularStd-Bold',
      lineHeight: 16,
      marginLeft: wp('3%'),
    },
    BookCategory: {
      fontSize: wp('2.8%'),
      fontFamily: 'CircularStd-Book',
      lineHeight: 14,
      color: "#007084",
      marginLeft: wp('3%'),
    }
  })
  
  export default styles;