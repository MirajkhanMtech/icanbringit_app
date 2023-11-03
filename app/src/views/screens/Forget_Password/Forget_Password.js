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


LogBox.ignoreAllLogs();

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [email, setemail] = useState("")
    const [fil, setfil] = useState()
    const [loading, setloading] = useState(false)

    const [emailError, setEmailError] = useState('');
    const forgetpass = async () => {
        setloading(true)
        try {
            if (email != '') {
                await fetch(global.url + "user/forgotPassword", {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,

                    })
                }).then(response => response.json())
                    .then(data => {
                        if (data.error == false) {
                            setloading(false)
                            console.log(data.data.email + '<------>' + data.otp)
                            navigation.navigate("Verification", { email: data.data.email, otp: data.otp })
                        }
                        else {
                            setloading(false)
                            console.log(data.message)
                            setEmailError(data.message)
                            setemail('')
                        }
                    });
            }
            else {
                setloading(false)
                setEmailError('Please Enter Email')
            }
        }
        catch (error) {
            setloading(false)
            console.log("Post submission failed");
            console.log(error.message);
        }

    }




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: '#ADDAFA', }}>
                <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
                <View style={styles.mainView}>
                    <FVR_headers title='Forget Password' title1='Enter your email below for a 4-digit verification code.' />
                    <View style={{ marginHorizontal: '7%', marginTop: '25%' }}>
                        <EmailInput title={'Enter Your Email '} />
                    </View>
                    <View style={{ alignSelf: 'center', marginTop: '70%', marginBottom: '5%' }}>
                        <CustomButton
                            title="Send Code"
                            load={false}
                            // checkdisable={inn == '' && cm == '' ? true : false}
                            customClick={() => {
                                navigation.navigate('Verification')
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default App;