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

import styles from './styles';

function Onboarding({ navigation }) {
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
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
            <View style={styles.mainView}>
                <Image source={appImages.f5} style={styles.image} resizeMode={'contain'} />
                <Text style={styles.txt1}>I Can Bring It!</Text>


                <View style={styles.v1}>
                    <TouchableOpacity activeOpacity={0.7} style={styles.btn1}>
                        <Text style={styles.txt2}>Create Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={0.7} style={styles.btn2}>
                        <Text style={styles.txt3}>Already have an account</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.bigview}>
                    <Divider style={styles.divider} />
                    <Text style={{ color: COLORS.grey, fontSize: 15 }}>  or continue with  </Text>
                    <Divider style={styles.divider} />
                </View>

                <View style={[styles.v2, { width: Platform.OS === 'ios' ? '60%' : '40%' }]}>
                    <Image source={appImages.f} style={styles.img} />
                    <Image source={appImages.g} style={styles.img} />
                    {Platform.OS === 'ios' && (
                        <Image source={appImages.a} style={styles.img} />
                    )}
                </View>

            </View>
        </SafeAreaView>
    );
}

export default Onboarding;
