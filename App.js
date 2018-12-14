
import React from 'react';
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import One from './src/screen';
import Two from './src/screen1';
import Three from './src/screen2';
import { BLUE } from './src/services/constants';

const tab = createBottomTabNavigator(
  {
    Stargate: One,
    Batman: Two,
    Spiderman: Three
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        console.log(routeName);
        if (routeName === 'Stargate') {
          iconName = focused ? 'ios-videocam' : 'ios-play';
        } else if (routeName === 'Batman') {
          iconName = focused ? 'ios-videocam' : 'ios-play';
        } else if (routeName === 'Spiderman') {
          iconName = focused ? 'ios-videocam' : 'ios-play';
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

export default createAppContainer(tab);
