import React, { useRef, useEffect } from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { scale, verticalScale } from 'react-native-size-matters';

const WelSplash = () => {

    const animation = useRef(null);
    const navigation = useNavigation();

    useEffect(() => {
        animation.current?.play();

        navigation.addListener('focus', () => {
            animation.current?.play();
        });

        setTimeout(() => {
            navigate();
        }, 2000)
    }, []);

    const navigate = () => {
        navigation.navigate("WelcomePage");
    }

    return (
        <View style={styles.animationContainer}>
            <StatusBar backgroundColor="#111111" />
            <Image source={require('../Image/logo.png')} style={styles.logo} />
        </View>
    );
}

export default WelSplash;

const styles = StyleSheet.create({
    animationContainer: {
        backgroundColor: "#111111",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    logo: {
        width: scale(250),
        height: verticalScale(318),
    },
});