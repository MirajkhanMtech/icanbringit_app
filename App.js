import 'react-native-gesture-handler';
import React, { useRef, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Linking,
  Platform,
  Alert,
  BackHandler,

} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  useNavigationState,
  useRoute,
  useNavigationContainerRef,
  StackActions,
  NavigationActions,
  useIsFocused
} from '@react-navigation/native';
import COLORS from './app/src/consts/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Onboarding from './app/src/views/screens/Onboarding/Onboarding';
import Main_Screen from './app/src/views/screens/Main_Screen/Main_Screen';






const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// react native function to get oject from async storage
const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('userDetail');
    if (value !== null) {
      var x = JSON.parse(value);
      // console.log(x)

      setDashboardlink(x.dashboardlink);
      setEditlink(x.editprofilelink);
    } else {

      // console.log('no data');
    }
  } catch (error) {
    // Error retrieving data
  }
};




function MyTabs({ route, naigation }) {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          height: 60,
          paddingTop: 5,
          paddingBottom: 0
        },
        // tabBarActiveTintColor: COLORS.primary,
        tabBarActiveTintColor: 'red',
        headerShown: false,
        tabBarInactiveTintColor: 'green',
        // tabBarInactiveTintColor: COLORS.greylight,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,

      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ tintColor, focused }) => (
            <Icon name='home' size={24} color={focused ? COLORS.primary : COLORS.greylight} />
          ),
        }}
        name="Home" component={HomePage} />


    </Tab.Navigator>
  );
}
const App = ({ navigation }) => {

  return (
    <NavigationContainer
      independent={true}>
      <Stack.Navigator screenOptions={{ header: () => null }}>
        {/* <Stack.Screen name="Onboarding" component={Onboarding} /> */}
        <Stack.Screen name="Main_Screen" component={Main_Screen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
