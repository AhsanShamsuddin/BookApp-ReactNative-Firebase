import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FavScreen from '../favScr/favScreen';
import HomeScreen from '../homeScr/home';
import AccountScreen from '../accScr/accountScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      shifting={true}
      sceneAnimationEnabled={false}
      activeColor='#fff'
      barStyle={{ backgroundColor: '#007084' }}
      >
      <Tab.Screen
        name="Favourite"
        component={ FavScreen }
        options={{
          tabBarIcon: 'cards-heart',
        }}
        tabBarOptions={{
          scrollEnabled:true,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: 'book-open-page-variant',
        }}
        tabBarOptions={{
          scrollEnabled:true,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
          tabBarIcon: 'account',
        }}
        tabBarOptions={{
          scrollEnabled:true,
        }}
      />
    </Tab.Navigator>
  );
};

export default function BottomTabsContainer() {

  return(
       <BottomTabs />
  )

}
