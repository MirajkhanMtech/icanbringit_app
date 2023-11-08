import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import COLORS from '../../../consts/colors';
import Images from '../../../consts/Images';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FastImage from 'react-native-fast-image';
import CustomText from '../../../components/Text';
import Icon from '../../../consts/Icons';

const Explore = () => {
  const Data = [
    {
      id: 1,
      image: Images.SuggestionBG1,
      title: 'Candyland Carnival',
    },
    {
      id: 2,
      image: Images.SuggestionBG1,

      title: 'Candyland Carnival',
    },
    {
      id: 3,
      image: Images.SuggestionBG1,

      title: 'Candyland Carnival',
    },
  ];
  const PartiesData = [
    {
      id: 1,
      image: Images.PartiesBg1,
      title: 'Candyland Carnival',
      time: 'Sun, Oct 29 - 5:00 pm',
      online: 'online',
      privte: 'private',
    },
    {
      id: 2,
      image: Images.PartiesBg1,
      title: 'Candyland Carnival',
      time: 'Sun, Oct 29 - 5:00 pm',
      online: 'online',
      privte: 'private',
    },
    {
      id: 3,
      image: Images.PartiesBg1,
      title: 'Candyland Carnival',
      time: 'Sun, Oct 29 - 5:00 pm',
      online: 'online',
      privte: 'private',
    },
  ];
  return (
    <View
      style={{flex: 1, backgroundColor: COLORS.white, paddingHorizontal: 20}}>
      <View style={styles.headerView}>
        <View style={{flexDirection: 'row'}}>
          <Image source={Images.locationIcon} />
          <View style={{paddingHorizontal: 20}}>
            <Text>Your location</Text>
            <Text>123 Elm Street...</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image source={Images.NotificationsIcon} style={{marginRight: 20}} />
          <Image source={Images.filterIcon} />
        </View>
      </View>
      <View
        style={{
          height: 50,
          borderWidth: 0.5,
          borderColor: '#868686',
          borderRadius: 10,
          marginTop: 15,
          paddingHorizontal: 15,
          flexDirection: 'row',
        }}>
        <View style={{justifyContent: 'center'}}>
          <AntDesign name="search1" size={24} />
        </View>
        <TextInput placeholder="Search events"></TextInput>
      </View>
      <ScrollView
        style={{flexGrow: 1, marginTop: 20}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text>AI Suggestions</Text>
          <TouchableOpacity>
            <Text style={{color: COLORS.blue, textDecorationLine: 'underline'}}>
              Suggest More
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            // numColumns={2}
            data={Data}
            horizontal
            renderItem={({item}) => {
              return (
                <View style={styles.flatlist_container}>
                  <FastImage
                    source={item.image}
                    style={{height: 200, width: 200}} // Set a fixed height and width for the FastImage
                    resizeMode="contain">
                    <View style={styles.cardInnerView}>
                      <CustomText text={item.title} style={styles.txt} />
                      <View style={{flexDirection: 'row'}}>
                        <Icon
                          name={'access-time'}
                          type={'MaterialIcons'}
                          color={'white'}
                          size={15}
                          style={{marginTop: 5}}
                        />
                        <CustomText
                          text={'19 Dec 2023 - 02:00'}
                          style={[styles.txt, {marginLeft: 5}]}
                        />
                      </View>
                    </View>
                  </FastImage>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text>Parties</Text>
          <TouchableOpacity>
            <Text style={{color: COLORS.blue, textDecorationLine: 'underline'}}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            // numColumns={2}
            data={PartiesData}
            horizontal
            renderItem={({item}) => {
              return (
                <View style={styles.flatlist_container2}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.imageView}
                  />
                  <CustomText text={item.title} style={styles.titleView} />
                  <CustomText text={item.time} style={styles.timeView} />
                <View style={{flexDirection:'row', marginTop:5}}>
                <TouchableOpacity style={styles.cardBtn}>
                    <CustomText text={item.online} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.cardBtn,{backgroundColor:'#FF6B01'}]}>
                    <CustomText text={item.privte} style={styles.textView} />
                  </TouchableOpacity>
                </View>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <Text>Concerts</Text>
          <TouchableOpacity>
            <Text style={{color: COLORS.blue, textDecorationLine: 'underline'}}>
              View All
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            // numColumns={2}
            data={PartiesData}
            horizontal
            renderItem={({item}) => {
              return (
                <View style={styles.flatlist_container2}>
                  <Image
                    source={item.image}
                    resizeMode="contain"
                    style={styles.imageView}
                  />
                  <CustomText text={item.title} style={styles.titleView} />
                  <CustomText text={item.time} style={styles.timeView} />
                <View style={{flexDirection:'row', marginTop:5}}>
                <TouchableOpacity style={styles.cardBtn}>
                    <CustomText text={item.online} />
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.cardBtn,{backgroundColor:'#FF6B01'}]}>
                    <CustomText text={item.privte} style={styles.textView} />
                  </TouchableOpacity>
                </View>
                </View>
              );
            }}
          />
        </View>
        <View style={{marginBottom: 80}} />
      </ScrollView>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({
  headerView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  flatlist_container: {
    height: 200,
    // padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    // backgroundColor:'red'
  },
  cardInnerView: {
    // alignItems:'flex-end',
    marginTop: '65%',
    backgroundColor: 'rgba(120, 120, 120,0.9)',
    width: '90%',
    alignSelf: 'center',
    height: '30%',
    borderRadius: 10,
    paddingHorizontal: 10,
    width: '80%',
  },
  txt: {
    color: COLORS.white,
    fontSize: 10,
    marginTop: 5,
  },
  flatlist_container2: {
    height: 250,
    marginHorizontal: 10,
    marginTop: 10,
    borderRadius: 10,
    borderColor: COLORS.black,
    borderWidth: 0.5,
    width: 180,
  },
  titleView: {
    color: COLORS.secondary,
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
  },
  imageView: {
    width: 190,
  },
  timeView: {
    marginHorizontal: 10,
  },
  cardBtn: {
    backgroundColor: COLORS.blue,
    padding: 8,
    marginHorizontal: 10,
    borderRadius:20,
    width:'40%',
    alignItems:'center'
  },
  textView:{
    color:COLORS.white
  }
});
