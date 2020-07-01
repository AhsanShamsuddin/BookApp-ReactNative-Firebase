import {StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

  const styles = StyleSheet.create({
      container: {
        backgroundColor: "#F2F5F9",
        marginBottom: hp('2%'),
      },
      activityIndicator: {
        flex: 1,
        justifyContent: 'center',
      },
      emailtxt: {
        fontFamily: "HelveticaNeue Light",
        fontSize:  wp('6%'),
        marginTop: hp('4%'),
        marginLeft: wp('10%'),
      },
      search:{
        width: wp('5%'),
        height:  hp('7%'),
        marginRight:  wp('7%'),
      },
      searchbar: {
        marginTop:  hp('7%'),
        marginLeft:  wp('5%'),
        marginRight:  wp('5%'),
      },
      square: {
        width: wp('80%'),
        height: hp('12%'),
        backgroundColor: '#007084',
        marginTop: hp('5%'),
        alignSelf: "center",
        borderRadius: 10,
      },
      bookshelf:{
        fontSize: wp('6.5%'),
        fontFamily: "CircularStd-Bold",
        color: 'white',
        marginTop: hp('1%'),
        marginLeft: hp('3%'),
        lineHeight: 35,
      },
      bookread: {
        width: wp('40%'),
        height: hp('18%'),
        marginLeft: wp('40%'),
        marginVertical: hp('-15%')
      },
      allbookSection: {
        marginTop: hp('5%'),
        marginLeft: wp('4%'),
      },
      allbooksTxt: {
        fontFamily: "CircularStd-Bold",
        fontSize: wp('5%'),
        lineHeight: 26
      },
      underline: {
        width: wp('20%'),
        height: 4,
        marginTop: 5,
        backgroundColor: '#007084',
        borderRadius: 10,
      },
      catergoryName: {
        fontSize: wp('5%'),
        fontFamily: 'CircularStd-Bold',
        lineHeight: 26,
      },
  })
  
  export default styles;