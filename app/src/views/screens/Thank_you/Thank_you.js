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
    Pressable, StatusBar
} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import appImages from './../../../consts/Images'
import {
    Button, Divider, TextInput,
} from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';

import { CircularProgress, AnimatedCircularProgress } from 'react-native-circular-progress';

import Back from './../../../assets/svg/back.svg'


import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import styles from './styles';
LogBox.ignoreAllLogs();

const App = ({ navigation }) => {
    const isFocused = useIsFocused()
    const [count, setcount] = useState(0)
    const gett = async () => {
        setTimeout(() => {
            // navigation.replace("Home")
            // console.log('Home')
        }, 5000)
    }
    const fillRate = 1; // Rate at which the circle fills

    const fillCircle = () => {
        if (count < 100) {
            // Update count gradually until 100
            const timer = setInterval(() => {
                setcount(prevCount => Math.min(prevCount + fillRate, 100));
            }, 100); // Interval time between updates in milliseconds

            // Clear the interval once count reaches 100
            return () => clearInterval(timer);
        }
    };



    useEffect(() => {
        gett()

    }, [isFocused]);

    useEffect(() => {
        fillCircle(); // Start filling the circle
    }, []);


    return (
        <ScrollView style={styles.bg} contentContainerStyle={{ flexGrow: 1 }}>
            <StatusBar barStyle={'dark-content'} backgroundColor={'transparent'} translucent={true} />
            <View style={styles.mainv}>
                <ImageBackground source={appImages.bbg} style={{ width: '100%', height: '100%' }} resizeMode='stretch' >

                    <Text style={styles.txt}>Thank you for providing the information</Text>


                    <View style={{ alignSelf: 'center',marginTop:'30%' }}>
                        <CircularProgress
                            size={170}
                            width={10}
                            fill={count}
                            tintColor="#B6BEA9"
                            backgroundColor="#B6BEA959"
                            rotation={0}
                            lineCap="round"
                        >
                            {() => <Text style={styles.txt1}>{count}%</Text>}
                        </CircularProgress>
                    </View>
                    <View style={styles.v1}>
                        <View style={styles.v2}>

                            <Text style={styles.txt3}>Creating Your Account</Text>
                        </View>

                    </View>

                </ImageBackground>

            </View>
        </ScrollView>
    )
}

export default App;