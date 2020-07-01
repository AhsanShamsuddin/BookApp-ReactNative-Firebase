import {
  StyleSheet,
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({

  header: {
    fontSize: wp('6%'),
    fontFamily: "CircularStd-Bold",
  },
  rectangle: {
    width: wp('85%'),
    height: hp('12%'),
    backgroundColor: 'white',
    marginLeft: wp('7%'),
    borderRadius: 20,
    marginBottom: hp('5%'),
    flexDirection:'row'
  },
  title: {
    marginLeft: wp('5%'),
    fontSize: wp('4.5%'),
    fontFamily: "CircularStd-Bold",
    color: "#3A3A3A",
    width:wp('45%')
  },
  header1:{
    fontSize: wp('6%'),
    fontFamily: "CircularStd-Bold",
    color: "#007084"
  },
  titleContainer:{
    marginTop: hp('2.5%'),
  },
  head:{
    marginTop:  hp('7%'),
    marginBottom:  wp('7%'),
    paddingLeft:  wp('7%'),
    flexDirection:'row'
  },
  category: {
    marginTop: hp('1%'),
    marginLeft: wp('5%'),
    fontSize: wp('3.5%'),
    fontFamily: "CircularStd",
    color: "#007084"
  },
  bookimage:{
    width:wp('20%'),
    height:hp('12%'),
    marginTop: hp('-1%'),
    marginLeft:  wp('4%')
  },
  cross:{
    width:wp('5%'),
    height:hp('2%'),
    marginTop:10,
    marginLeft:  wp('2%')
  },

})

export default styles;