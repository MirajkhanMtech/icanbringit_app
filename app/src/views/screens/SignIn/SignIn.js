import 'react-native-gesture-handler';
import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import COLORS from '../../../consts/colors';
import appImages from './../../../consts/Images';
import CustomButton from '../../../components/button/Custom_Button';
import {Formik} from 'formik';
import Signin_signup_header from '../../../components/button/Signin_signup_header';
import styles from './styles';
import {logInValidationSchema} from '../../../Utills/Validations';
// import InputField from '../../../components/InputFiled';
import CustomText from '../../../components/Text';
import InputField from '../../../components/CustomSnackbar/InputFiled';
import {useDispatch} from 'react-redux';
import {UserLogin} from '../../../Redux/authSlice';
import BasUrl from '../../../BasUrl';
import axios from 'axios';

const SignIn = ({navigation}) => {
  const [isLoader, setIsLoader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      // do something specific for iOS
      console.log('ios');
    } else {
      // do something for Android or other platforms
      console.log('ios');
    }
  }, []);

  const LogInUser = async (email, password) => {
    // navigation.navigate('MyTabs',{screen:'Home'})
    // let data = JSON.stringify({
    //   "email": values.email,
    //   "password": values.password,
    //   "device_id": 'i dont know',
    //   "signin_type": 'email',
    // });

    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: `${BasUrl}/api/users/signIn`,
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   data: data,
    // };
    // dispatch(UserLogin(config));
    let data = JSON.stringify({
      email: email,
      password: password,
      device_id: 'i dont know',
      signin_type: 'email',
    });
    console.log('dataaaaaaaa', data)

    let config = {
      method: 'post',
      // maxBodyLength: Infinity,
      url: `https://icanbringit-be.mtechub.com/api/users/signIn`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    dispatch(UserLogin(config));

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
      })
      .catch(error => {
        console.log('erorrrrrrrrrrrrrrrrr', error);
      });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{backgroundColor: 'white'}}>
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        />
        <View style={styles.mainView}>
          {/* <Signin_signup_header title="I Can Bring It!" title1="Sign In" /> */}
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validateOnMount={true}
            onSubmit={values => LogInUser(values.email, values.password)}
            validationSchema={logInValidationSchema}>
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
                  // title="I Can Bring It!"
                  title1="Sign In"
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
                </View>
                <View style={{marginHorizontal: 23}}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Forget_Password');
                    }}>
                    <Text style={styles.txt}>Forget Password?</Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    alignSelf: 'center',
                    marginTop: '20%',
                    marginBottom: '5%',
                  }}>
                  <CustomButton
                  
                    // title="Continue"
                    load={false}
                    // checkdisable={inn == '' && cm == '' ? true : false}
                    customClick={() => {
                      handleSubmit(values);
                    }}
                  > 
                title={'ggggggg'}
                  </CustomButton>
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
                    navigation.navigate('SignUp');
                  }}
                  style={{
                    alignSelf: 'center',
                    marginTop: '5%',
                    marginBottom: '5%',
                  }}>
                  <Text style={styles.txt2}>
                    Already have an account?
                    <Text style={styles.txt3}> Sign Up</Text>
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
