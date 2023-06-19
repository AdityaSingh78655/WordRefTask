import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Text, View } from 'react-native';
import ScreenTwo from '../screens/ScreenTwo';
import ScreenOne from '../screens/ScreenOne';
import { AppImages } from '../screens/AppImage/AppImages';


const createTabIcon = (icon, label, focused) => {
  const iconStyle = focused ? styles.iconFocused : styles.icon;
  const labelStyle = focused ? styles.labelFocused : styles.label;

  return (
    <View style={styles.tabIconContainer}>
      <Image style={iconStyle} source={icon} />
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
};

const BottomNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 50, // Fixed height of 30 pixels
          backgroundColor: '#ffffff',
        },
      }}>
      <Tab.Screen
        name="ScreenOne"
        component={ScreenOne}
        options={{
          tabBarIcon: ({ focused }) =>
            createTabIcon(AppImages.ADD_NOTE, 'Add Note', focused),
        }}
      />
      <Tab.Screen
        name="ScreenTwo"
        component={ScreenTwo}
        options={{
          tabBarIcon: ({ focused }) =>
            createTabIcon(AppImages.SEARCH_NOTE, 'Search Note', focused),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    alignItems: 'center',
  },
  icon: {
    tintColor: 'blue',
    width: 15,
    height: 15,
  },
  iconFocused: {
    tintColor: 'red',
    width: 20,
    height:20,
  },
  label: {
    color: 'blue',
  },
  labelFocused: {
    color: 'red',
  },
});

export default BottomNavigation;
