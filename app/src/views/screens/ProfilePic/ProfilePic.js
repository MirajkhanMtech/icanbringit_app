import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import Signin_signup_header from '../../../components/button/Signin_signup_header';
import Images from '../../../consts/Images';
import Custom_Button from '../../../components/button/Custom_Button';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RBSheet from 'react-native-raw-bottom-sheet';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfilePic = ({navigation}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [selectedItem, setSelectedItem] = useState('');

  const ref_RBSheetCamera = useRef(null);
  const takePhotoFromCamera = async value => {
    setSelectedItem(value);
    launchCamera(
      {
        mediaType: 'Photo',
        //videoQuality: 'medium',
      },
      response => {
        console.log('image here', response);
        if (!response.didCancel) {
          if (response.assets && response.assets.length > 0) {
            setImageUri(response.assets[0].uri);
            console.log('response', response.assets[0].uri);
          } else if (response.uri) {
            // Handle the case when no assets are present (e.g., for videos)
            setImageUri(response.uri);
            console.log('response', response.uri);
          }
        }
        ref_RBSheetCamera.current.close();
      },
    );
  };
  const choosePhotoFromLibrary = value => {
    setSelectedItem(value);
    launchImageLibrary({mediaType: 'Photo'}, response => {
      console.log('image here', response);
      if (!response.didCancel && response.assets.length > 0) {
        setImageUri(response.assets[0].uri);
      }
      console.log('response', imageUri);
      ref_RBSheetCamera.current.close();
    });
  };

  return (
    <View style={{flex: 1}}>
      <Signin_signup_header title="Add Profile Photo" />
      <View>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => ref_RBSheetCamera.current.open()}>
          {selectedImage ? (
            <Image
              source={{uri: selectedImage}}
              style={{width: 200, height: 200}}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={Images.profilePic}
              style={{width: 200, height: 200}}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={{marginTop: '70%', alignSelf: 'center'}}>
        <Custom_Button
          title="Continue"
          load={false}
          // checkdisable={inn == '' && cm == '' ? true : false}
          customClick={() => {
            navigation.navigate('Add_Location',);
          }}
        />
      </View>
      <RBSheet
        ref={ref_RBSheetCamera}
        closeOnDragDown={true}
        closeOnPressMask={false}
        animationType="fade"
        minClosingHeight={0}
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(52, 52, 52, 0.5)',
          },
          draggableIcon: {
            backgroundColor: 'white',
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            height: 150,
          },
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 10,
            alignItems: 'center',
          }}>
          <Text style={styles.maintext}>Select an option</Text>
          <TouchableOpacity onPress={() => ref_RBSheetCamera.current.close()}>
            <Ionicons
              name="close"
              size={22}
              color={'#303030'}
              onPress={() => ref_RBSheetCamera.current.close()}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <TouchableOpacity
            onPress={() => takePhotoFromCamera('camera')}
            style={
              selectedItem === 'camera'
                ? styles.selectedItems
                : styles.nonselectedItems
            }
            >
            <Ionicons
              color={selectedItem === 'camera' ? '#FACA4E' : '#888888'}
              name="camera"
              size={25}
            />
            <Text style={{color: '#333333'}}>From camera</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => choosePhotoFromLibrary('gallery')}
            style={
              selectedItem === 'gallery'
                ? styles.selectedItems
                : styles.nonselectedItems
            }
            >
            <MaterialCommunityIcons
            //   color={selectedItem === 'gallery' ? '#FACA4E' : '#888888'}
              name="image"
              size={25}
            />
            <Text style={{color: '#333333'}}>From gallery</Text>
          </TouchableOpacity>
        </View>
      </RBSheet>
    </View>
  );
};

export default ProfilePic;

const styles = StyleSheet.create({});
