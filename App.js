
import React from 'react';
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import One from './src/screen';
import Two from './src/screen1';
import Three from './src/screen2';
import { BLUE } from './src/services/constants';

const sideMenu = createDrawerNavigator(
  {
    Screen1: {
      screen: One,
      navigationOptions: {
        drawerLabel: 'Stargate',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name='grade' size={24} style={{ color: tintColor }} />
        )
      }
    },
    Screen2: {
      screen: Two,
      navigationOptions: {
        drawerLabel: 'Batman',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name='favorite' size={24} style={{ color: tintColor }} />
        )
      }
    },
    Screen3: {
      screen: Three,
      navigationOptions: {
        drawerLabel: 'Spiderman',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name='pets' size={24} style={{ color: tintColor }} />
        )
      }
    }
  },
  {
    initialRouteName: 'Screen1'
  }
);
export default createAppContainer(sideMenu);
