import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Text, View, Dimensions } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { scale, verticalScale } from 'react-native-size-matters';
import { RFPercentage } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector } from 'react-redux';

const CustomeDrawer = (props) => {
    const [name, setName] = useState('');
    const [img, setImg] = React.useState(null);


    const getValueFunction = async () => {
        let token1 = await AsyncStorage.getItem("token Mail");
        if (token1 !== null) {
            console.log("Name here", token1)
            setName(token1)

        } else {
            AsyncStorage.getItem('any_key_here').then(
                (value) =>
                    setName(value)
            );
        };

    }

    useEffect(() => {
        getValueFunction()
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
               {
                img === null ?
                <Image source={require("./Image/profile.png")}
                style={styles.imglogo} />
                :
                <Image source={{uri:img}}
                style={styles.imglogo} />
               }
                <Text style={styles.headertext}>{name}</Text>
            </View>
            <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <View><Text style={styles.footertext}>Version 3.7.3</Text></View>
        </View>
    );
};

export default CustomeDrawer;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3'
    },
    header: {
        backgroundColor: '#D9D9D9',
        width: '100%',
        height: verticalScale(90),
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    imglogo: {
        width: scale(60),
        height: scale(60),
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: scale(30)
    },
    headertext: {
        fontSize: RFPercentage(3),
        color: '#545151',
        fontFamily: 'bold_solid',
        marginLeft: verticalScale(10)
    },
    footertext: {
        fontSize: RFPercentage(2.30),
        fontFamily: 'bold_solid',
        textAlign: 'center',
        marginBottom: 5
    }
})