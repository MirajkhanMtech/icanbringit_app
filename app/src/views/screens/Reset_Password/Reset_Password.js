import React, { useEffect, useRef, useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    ScrollView,
    View, FlatList,
    Image,
    Text,
    TouchableOpacity,
    LogBox,
    Animated,
    ImageBackground,
    Pressable, StatusBar, TextInput
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { EmailInput, PasswordInput } from '../../../components/button/TextInput';
import {
    Button, Divider,
} from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import CustomButton from '../../../components/button/Custom_Button';
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';

import FVR_headers from '../../../components/button/FVR_headers';
import FlashMessage, { showMessage } from 'react-native-flash-message';

LogBox.ignoreAllLogs();

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
   

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#ADDAFA', }}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
                <View style={styles.mainView}>
                    <FVR_headers title='Reset Password' title1='Create a strong password.' />
                    <View style={{ marginHorizontal: '7%', marginTop: '25%' }}>
                        <PasswordInput title={'Your password'} />
                        <PasswordInput title={'Confirm password'} />
                    </View>
                    <FlashMessage position="top" />
                    <View style={{ alignSelf: 'center', marginTop: '70%', marginBottom: '5%' }}>
                        <CustomButton
                            title="Reset"
                            load={false}
                            // checkdisable={inn == '' && cm == '' ? true : false}
                            customClick={() => {
                                showMessage({
                                    message: 'Success',
                                    description: "Password reset successfully",
                                    type: 'success'
                                })
                                setTimeout(() => {
                                    navigation.navigate('SignIn')
                                }, 3000);
                            }}
                        />
                      
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default App;