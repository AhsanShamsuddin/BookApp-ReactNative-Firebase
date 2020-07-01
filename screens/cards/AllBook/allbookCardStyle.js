import {
    StyleSheet,
  } from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  const styles = StyleSheet.create({
      square: {
        width: wp('65%'),
        height: 126,
        backgroundColor: '#fff',
        marginTop: 30,
        borderRadius: 8,
        marginLeft: 18,
      },
      BookTitle: {
          fontSize: wp('4%'),
          fontFamily: 'CircularStd-Bold',
          lineHeight: 19,
          marginBottom: 5,
      },
      bookDescription: {
          fontSize: wp('2.5%'),
          fontFamily: 'CircularStd-Book',
          lineHeight: 14,
          width: wp('40%'),
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
        fontSize: wp('2.8%'),
        fontFamily: 'CircularStd-Book',
        color: "#007084",
        lineHeight: 14,
        marginTop: 8,
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
        marginTop: hp('-16%'),
    }
  })
  
  export default styles;