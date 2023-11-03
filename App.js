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
import SignUp from './app/src/views/screens/SignUp/SignUp';
import SignIn from './app/src/views/screens/SignIn/SignIn';
import Forget_Password from './app/src/views/screens/Forget_Password/Forget_Password';
import Verification from './app/src/views/screens/Verification/Verification';
import Email_Verification from './app/src/views/screens/Email_Verification/Email_Verification';
import Tell_Us_About_Yourself from './app/src/views/screens/Tell_Us_About_Yourself/Tell_Us_About_Yourself';
import Add_Profile_photo from './app/src/views/screens/Add_Profile_photo/Add_Profile_photo';
import Add_Location from './app/src/views/screens/Add_Location/Add_Location';
import Map from './app/src/views/screens/Map/Map';
import Reset_Password from './app/src/views/screens/Reset_Password/Reset_Password';
import Select_preferences from './app/src/views/screens/Select_preferences/Select_preferences';
import Thank_you from './app/src/views/screens/Thank_you/Thank_you';

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
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Main_Screen" component={Main_Screen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Forget_Password" component={Forget_Password} />
        <Stack.Screen name="Verification" component={Verification} />
        <Stack.Screen name="Email_Verification" component={Email_Verification} />
        <Stack.Screen name="Tell_Us_About_Yourself" component={Tell_Us_About_Yourself} />
        <Stack.Screen name="Add_Profile_photo" component={Add_Profile_photo} />
        <Stack.Screen name="Add_Location" component={Add_Location} />
        <Stack.Screen name="Map" component={Map} />
        <Stack.Screen name="Reset_Password" component={Reset_Password} />
        <Stack.Screen name="Select_preferences" component={Select_preferences} />
        <Stack.Screen name="Thank_you" component={Thank_you} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
