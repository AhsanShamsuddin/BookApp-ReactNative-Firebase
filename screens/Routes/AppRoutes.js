import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../loginScr/loginScreen';
import RegisterScreen from '../regScr/regScreen';
import HomeScreen from '../homeScr/home';
import BottomTabsContainer from './BottomTabs';
import BookDetailsScreen from '../bookDetailsScr/bookDetailsScreen';
import ReviewRateScreen from '../reviewScr/reviewrateScreen';
import AdminScreen from '../adminScr/adminScreen';
import AdminAllBooks from '../adminAllBookscr/adminAllBookScreen';

const Stack = createStackNavigator();

function NavStack() {
  return (
    <Stack.Navigator 
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen name="SignIn" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={RegisterScreen} />
      <Stack.Screen name="BookDetail" component={BookDetailsScreen} />
      <Stack.Screen name="ReviewnRate" component={ReviewRateScreen} />
      <Stack.Screen name="AdminScreen" component={AdminScreen} />
      <Stack.Screen name="AdminAllBooks" component={AdminAllBooks} />
      <Stack.Screen name="BottomNav" component={BottomTabsContainer} />
    </Stack.Navigator>
  );
}

export default function AppContainer() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}
