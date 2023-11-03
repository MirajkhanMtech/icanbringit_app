import 'react-native-gesture-handler';
import React, { useState, useEffect, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    BackHandler,
    Image,
    useColorScheme,
    View,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    TextInput, Platform
} from 'react-native';
import {
    Text,
    Button,
    Snackbar,
    Headline,
    ActivityIndicator,
    Colors,
    TouchableRipple,
    Divider,

} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Swiper from 'react-native-swiper';
import COLORS from '../../../consts/colors';
import { base_url, base_url1 } from '../../../consts/base_url';
import appImages from './../../../consts/Images'
import AsyncStorage from '@react-native-async-storage/async-storage';


import CustomButton from '../../../components/button/Custom_Button';


import Signin_signup_header from '../../../components/button/Signin_signup_header';
import { EmailInput, PasswordInput } from '../../../components/button/TextInput';
import styles from './styles';

function SignIn({ navigation }) {
    useEffect(() => {
        if (Platform.OS === 'ios') {
            // do something specific for iOS
            console.log('ios')
        } else {
            // do something for Android or other platforms
            console.log('ios')
        }
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={{backgroundColor:'white'}}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
                <View style={styles.mainView}>
                    <Signin_signup_header title='I Can Bring It!' title1='Create Account' />
                    <View style={{ marginHorizontal: '7%', marginTop: '8%' }}>
                        <EmailInput title={'Enter Your Email '} />
                        <PasswordInput title={'Your password'} />
                        <PasswordInput title={'Your password'} />
                    </View>



                    <View style={{ alignSelf: 'center', marginTop: '20%', marginBottom: '5%' }}>
                        <CustomButton
                            title="Continue"
                            load={false}
                            // checkdisable={inn == '' && cm == '' ? true : false}
                            customClick={() => {
                                navigation.navigate('Email_Verification')
                            }}
                        />
                    </View>
                    <View style={styles.bigview}>
                        <Divider style={styles.divider} />
                        <Text style={styles.txt1}>  or continue with  </Text>
                        <Divider style={styles.divider} />
                    </View>

                    <View style={[styles.v2, { width: Platform.OS === 'ios' ? '60%' : '40%' }]}>
                        <Image source={appImages.f} style={styles.img} />
                        <Image source={appImages.g} style={styles.img} />
                        {Platform.OS === 'ios' && (
                            <Image source={appImages.a} style={styles.img} />
                        )}
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        onPress={()=>{navigation.navigate('SignIn')}}
                        style={{ alignSelf: 'center', marginTop: '5%', marginBottom: '5%' }}>
                        <Text style={styles.txt2}>Already have an account?
                            <Text style={styles.txt3}> Sign In
                            </Text></Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </SafeAreaView >
    );
}

export default SignIn;
