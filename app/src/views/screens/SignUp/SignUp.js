import 'react-native-gesture-handler';
import React, {useState, useEffect, useRef} from 'react';
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
  TextInput,
  Platform,
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
import {base_url, base_url1} from '../../../consts/base_url';
import appImages from './../../../consts/Images';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';

import CustomButton from '../../../components/button/Custom_Button';

import Signin_signup_header from '../../../components/button/Signin_signup_header';
import {EmailInput, PasswordInput} from '../../../components/button/TextInput';
import styles from './styles';
import {SignUpValidationSchema} from '../../../Utills/Validations';
import CustomText from '../../../components/Text';
import BasUrl from '../../../BasUrl';
import axios from 'axios';
import InputField from '../../../components/CustomSnackbar/InputFiled';
import LoaderModal from '../../../components/LoaderModal';

const SignUp = ({navigation}) => {
  const [isLoader, setIsLoader] = useState(false);

  const RegisterUser = async (email, password, confirmPassword) => {
    setIsLoader(true);

    let data = JSON.stringify({
      email: email,
      password: password,
      confirmPassword: confirmPassword,
      signup_type: 'email',
      device_id: 'i dont know',
    });
    console.log('llllllllllllllllllllll', email, password, confirmPassword);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://icanbringit-be.mtechub.com/api/users/create',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        setIsLoader(false);
        navigation.navigate('Email_Verification');
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        setIsLoader(false);

        if (error.response && error.response.status === 409) {
          console.log('User already exists with this email');
        } else {
          console.log(error.message);
        }
      });
  };

  useEffect(() => {
    if (Platform.OS === 'ios') {
      console.log('ios');
    } else {
      console.log('ios');
    }
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        {/* <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />{' '} */}
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validateOnMount={true}
          onSubmit={values =>
            RegisterUser(values.email, values.password, values.confirmPassword)
          }
          validationSchema={SignUpValidationSchema}>
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <View style={styles.mainView}>
              <Signin_signup_header
                title="I Can Bring It!"
                title1="Create Account"
              />
              <View style={{marginHorizontal: '7%', marginTop: '8%'}}>
                <InputField
                  placeholder={'Email Address'}
                  value={values.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  secureText={false}
                  Lefticon={true}
                  name="email-outline"
                  type={'material-community'}
                  color={COLORS.grey}
                  size={18}
                />
                {errors.email && touched.email && (
                  <CustomText text={errors.email} style={styles.errors} />
                )}
                <InputField
                  placeholder={'password'}
                  value={values.password}
                  onBlur={handleBlur('password')}
                  onChangeText={handleChange('password')}
                  secureText={true}
                  icon={true}
                  Lefticon={true}
                  name="lock"
                  type={'SimpleLineIcons'}
                  color={COLORS.greylight}
                  size={18}
                />
                {errors.password && touched.password && (
                  <CustomText text={errors.password} style={styles.errors} />
                )}

                <InputField
                  placeholder={'Re-type Password'}
                  value={values.confirmPassword}
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  secureText={true}
                  icon={true}
                  Lefticon={true}
                  name="lock"
                  type={'SimpleLineIcons'}
                  color={COLORS.greylight}
                  size={18}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <CustomText
                    text={errors.confirmPassword}
                    style={styles.errors}
                  />
                )}
              </View>

              <View
                style={{
                  alignSelf: 'center',
                  marginTop: '20%',
                  marginBottom: '5%',
                }}>
                {isLoader ? (
                  <LoaderModal />
                ) : (
                  <CustomButton
                    title="Continue"
                    load={false}
                    // checkdisable={inn == '' && cm == '' ? true : false}
                    customClick={handleSubmit}

                    // customClick={() => navigation.navigate('Email_Verification')}
                  />
                )}
              </View>
              <View style={styles.bigview}>
                <Divider style={styles.divider} />
                <Text style={styles.txt1}> or continue with </Text>
                <Divider style={styles.divider} />
              </View>

              <View
                style={[
                  styles.v2,
                  {width: Platform.OS === 'ios' ? '60%' : '40%'},
                ]}>
                <Image source={appImages.f} style={styles.img} />
                <Image source={appImages.g} style={styles.img} />
                {Platform.OS === 'ios' && (
                  <Image source={appImages.a} style={styles.img} />
                )}
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate('SignIn');
                }}
                style={{
                  alignSelf: 'center',
                  marginTop: '5%',
                  marginBottom: '5%',
                }}>
                <Text style={styles.txt2}>
                  Already have an account?
                  <Text style={styles.txt3}> Sign In</Text>
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
