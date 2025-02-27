import 'react-native-gesture-handler';
import React, {useRef, useEffect, useState} from 'react';
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
  useIsFocused,
} from '@react-navigation/native';
import COLORS from './app/src/consts/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';



import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

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
import SplashScreen from 'react-native-splash-screen';
import Home from './app/src/views/screens/Home/Home';
import Explore from './app/src/views/screens/Explore/Explore';
import Schedule from './app/src/views/screens/Schedule/Schedule';
import Chat from './app/src/views/screens/Chat/Chat';
import Add from './app/src/views/screens/Add/Add';
import AboutYourSelf from './app/src/views/screens/AboutYourSelf/AboutYourSelf';
import ProfilePic from './app/src/views/screens/ProfilePic/ProfilePic';
import AddLocation from './app/src/views/screens/AddLocation/AddLocation';

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

function MyTabs({route, naigation}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            position: 'absolute',
            height: 60,
            paddingTop: 5,
            paddingBottom: 5,
          },
          tabBarActiveTintColor: COLORS.blue,
          headerShown: false,
          tabBarInactiveTintColor: 'green',
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
        }}>
          <Tab.Screen
            options={{
              tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                  name="explore"
                  size={24}
                  color={focused ? COLORS.blue : COLORS.greylight}
                />
              ),
            }}
            name="Explore"
            component={Explore}
          />
       
         <Tab.Screen
          options={{
            tabBarIcon: ({tintColor, focused}) => (
              <FontAwesome6
                name="calendar-days"
                size={24}
                color={focused ? COLORS.blue : COLORS.greylight}
              />
            ),
          }}
          name="Schedule"
          component={Schedule}
        />
        <Tab.Screen
          options={{
            tabBarLabel: '',

            tabBarIcon: ({tintColor, focused}) => (
              <View
                style={{
                  bottom: 20,
                  height: 50,
                  backgroundColor: COLORS.blue,
                  width: 50,
                  alignItems: 'center',
                  borderRadius:25,
                  justifyContent:'center'
                }}>
                <AntDesign
                  name="plussquare"
                  size={24}
                  color={focused ? COLORS.blue : COLORS.greylight}
                />
              </View>
            ),
          }}
          name="Add"
          component={Add}
        />
         <Tab.Screen
          options={{
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name="home"
                size={24}
                color={focused ? COLORS.blue : COLORS.greylight}
              />
            ),
          }}
          name="Home"
          component={Home}
        />
       
        <Tab.Screen
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({tintColor, focused}) => (
              <Icon
                name="home"
                size={24}
                color={focused ? COLORS.blue : COLORS.greylight}
              />
            ),
          }}
          name="Chat"
          component={Chat}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}
const App = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer independent={true}>
        <Stack.Navigator screenOptions={{header: () => null}}>
          <Stack.Screen name="Onboarding" component={Onboarding} />
          <Stack.Screen name="Main_Screen" component={Main_Screen} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="Forget_Password" component={Forget_Password} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen
            name="Email_Verification"
            component={Email_Verification}
          />
          <Stack.Screen
            name="Tell_Us_About_Yourself"
            component={Tell_Us_About_Yourself}
          />
          <Stack.Screen
            name="Add_Profile_photo"
            component={Add_Profile_photo}
          />
          <Stack.Screen name="Add_Location" component={Add_Location} />
          <Stack.Screen name="Map" component={Map} />
          <Stack.Screen name="Reset_Password" component={Reset_Password} />
          <Stack.Screen
            name="Select_preferences"
            component={Select_preferences}
          />
          <Stack.Screen name="Thank_you" component={Thank_you} />
          <Stack.Screen name="MyTabs" component={MyTabs} />
          <Stack.Screen name="AboutYourSelf" component={AboutYourSelf} />
          <Stack.Screen name="ProfilePic" component={ProfilePic} />
          {/* <Stack.Screen name="AddLocation" component={AddLocation} /> */}

          
          
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
