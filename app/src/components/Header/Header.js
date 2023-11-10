import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ActivityIndicator,
    ImageBackground,
    StatusBar,
  } from 'react-native';
  import React from 'react';
  import {Button} from 'react-native-paper';
  import {useNavigation} from '@react-navigation/native';
  import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
  import Back from './../../assets/svg/back.svg';
  import {
    heightPercentageToDP,
    widthPercentageToDP,
  } from 'react-native-responsive-screen';
  export default function Header({title}) {
    const navigation = useNavigation();
    return (
      <View style={{}}>
        {/* <StatusBar
          barStyle={'dark-content'}
          backgroundColor={'transparent'}
          translucent={true}
        /> */}
  
        <TouchableOpacity
          activeOpacity={0.7}
          // style={{backgroundColor:'pink'}}
          onPress={() => {
            navigation.goBack();
          }}>
          <Back
            width={35}
            height={35}
            style={{marginTop: '14%',  marginHorizontal: '3%'}}
          />
        </TouchableOpacity>
  
        <Text style={styles.txt}>{title}</Text>
  
      </View>
    );
  }
  const styles = StyleSheet.create({
    txt: {
      color: 'black',
      fontSize: heightPercentageToDP(3.2),
      fontFamily: 'Montserrat-Bold',
    //   alignSelf: 'center',
      textAlign: 'center',
    },
    txt1: {
      color: '#5D5D5D',
      fontSize: heightPercentageToDP(2),
      fontFamily: 'Montserrat-Medium',
      textAlign: 'center',
    },
  });
  