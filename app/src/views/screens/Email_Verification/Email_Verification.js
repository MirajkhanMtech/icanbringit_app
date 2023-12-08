import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
  Text,
  TouchableOpacity,
  LogBox,
  Pressable,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import CustomButton from '../../../components/button/Custom_Button';
import {useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

import FVR_headers from '../../../components/button/FVR_headers';
// import { showMessage, hideMessage } from "react-native-flash-message";
import FlashMessage, {showMessage} from 'react-native-flash-message';
import BasUrl from '../../../BasUrl';
import axios from 'axios';
const CELL_COUNT = 4;
LogBox.ignoreAllLogs();

const App = ({navigation}) => {
  const isFocused = useIsFocused();
  const [value, setValue] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
//api
const CheckingOtp = () => {
    setIsLoader(true);
    let data = JSON.stringify({
      otp: value,
    //   id: id,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: `${BasUrl}api/users/verify_otp`,
      headers: {
        // Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setIsLoader(false);
        console.log(JSON.stringify(response));
        const res = response.data;
        if (res.success === true) {
          navigation.navigate("ResetPassword", {
            id: id,
          });
          showToast("success", res.message);
        } else {
          showToast("error", res.message);
        }
      })
      .catch((error) => {
        setIsLoader(false);
        console.log(error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: '#ADDAFA'}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <View style={styles.mainView}>
          <FVR_headers
            title="Email Verification"
            title1="We have sent you a verification code on your provided email."
          />

          <View style={styles.root}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[styles.cell, isFocused && styles.focusCell]}
                  onLayout={getCellOnLayoutHandler(index)}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )}
            />
          </View>

          <View style={{alignSelf: 'center'}}>
            <Text style={[styles.txt1, {color: '#1B1464'}]}>
              Resend Code <Text style={{color: '#5D5D5D'}}>in 00:56</Text>
            </Text>
          </View>

          <View
            style={{alignSelf: 'center', marginTop: '70%', marginBottom: '3%'}}>
            <CustomButton
              title="Verify"
              load={false}
              // checkdisable={inn == '' && cm == '' ? true : false}
              customClick={() => {
                showMessage({
                  message: 'Success',
                  description: 'Email Verified Successfully',
                  type: 'success',
                });
                CheckingOtp()
                // navigation.navigate('Tell_Us_About_Yourself');
              }}
            />
          </View>

          <FlashMessage position="top" />

          <TouchableOpacity
            onPress={() => {}}
            activeOpacity={0.7}
            style={styles.btn2}>
            <Text style={styles.txt3}>Change Email Address</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
