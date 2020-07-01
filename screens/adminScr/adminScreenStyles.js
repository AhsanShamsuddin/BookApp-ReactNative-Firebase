import {
    StyleSheet,
  } from 'react-native';
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  const styles = StyleSheet.create({
      square: {
        width: wp('82%'),
        height: hp('18%'),
        backgroundColor: '#fff',
        marginTop: hp('15%'),
        borderRadius: 8,
        marginLeft: wp('8%'),
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
    email: {
        borderWidth: 2, 
        borderColor: '#A7A7A7',  
        borderRadius: 68/2,
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 16,
        fontFamily: "HelveticaNeue Light",
        textAlign: "center",
        height: hp('6%'),
        width: wp('80%'),
        marginTop: hp('5%'),
        alignSelf: "center",
    },
    password: {
        borderWidth: 2, 
        borderColor: '#A7A7A7',  
        borderRadius: 68/2,
        paddingLeft: 15,
        paddingRight: 15,
        fontSize: 16,
        fontFamily: "HelveticaNeue Light",
        textAlign: "center",
        height: hp('6%'),
        width: wp('80%'),
        marginTop: 20,
        alignSelf: "center"
    },
    Addbtn:{
        marginTop:40,
        width:wp('70%'),
        height:hp('5%'),
        borderRadius:68/2,
        alignSelf:'center',
        
    },
  })
  
  export default styles;