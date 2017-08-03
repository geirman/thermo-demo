import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import RevenueScreen from '../screens/RevenueScreen';
import DevicesScreen from '../screens/DevicesScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Revenue: {
      screen: RevenueScreen
    },
    Devices: {
      screen: DevicesScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-home${focused ? '' : '-outline'}`
                : 'md-home';
            break;
          case 'Revenue':
            iconName =
              Platform.OS === 'ios'
                ? `ios-cash${focused ? '' : '-outline'}`
                : 'md-cash';
            break;
          case 'Devices':
            iconName =
              Platform.OS === 'ios'
                ? `ios-warning${focused ? '' : '-outline'}`
                : 'md-warning';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      }
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  }
);
