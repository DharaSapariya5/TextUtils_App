import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { scale, verticalScale } from 'react-native-size-matters'
import { useDispatch } from 'react-redux'
import { UserLogout } from '../Redux/Actions'
import { GoogleSignin } from '@react-native-google-signin/google-signin'
import auth from '@react-native-firebase/auth';

const Logout = ({ navigation }) => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            dispatch(UserLogout())
            await GoogleSignin.revokeAccess();
            // await auth().signOut();
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <View style={styles.continer}>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Image source={require("../Image/menu.png")} style={styles.menulogo} />
                </TouchableOpacity>
                <Text style={styles.headertext}>Log Out</Text>
            </View>

            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
                <View style={styles.popbox}>
                    <Image source={require("../Image/arrow.png")}
                        style={{ width: scale(100), height: scale(100), marginTop: verticalScale(30) }} />
                    <Text style={styles.textone}>Oh no! You're Leaving...{'\n'}Are you sure?</Text>

                    <View style={[styles.btn, { marginTop: verticalScale(0) }]}>
                        <TouchableOpacity
                            style={[styles.btnview, { borderColor: "#537fe7", backgroundColor: "#537fe7", borderWidth: scale(1), width: scale(200), height: verticalScale(50) }]}
                            onPress={() => navigation.goBack()}>
                            <Text style={[styles.btntext, { color: '#fff', fontSize: RFPercentage(2) }]}>Naah, Just Kidding</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={[styles.btn, { marginTop: -verticalScale(50) }]}>
                        <TouchableOpacity
                            style={[styles.btnview, { borderColor: "#537fe7", backgroundColor: '#fff', borderWidth: scale(1), width: scale(200), height: verticalScale(50) }]}
                            onPress={() => handleLogout()}>
                            <Text style={[styles.btntext, { color: '#537fe7', fontSize: RFPercentage(2) }]}>Yes, Log Me Out</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({
    continer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#fff',
        width: "100%",
        borderBottomWidth: scale(1),
        borderBottomColor: '#111111',
        height: verticalScale(60),
        alignItems: 'center',
        flexDirection: 'row',
    },
    menulogo: {
        width: scale(20),
        height: scale(20),
        marginLeft: scale(10)
    },
    headertext: {
        fontSize: RFPercentage(3),
        marginLeft: scale(10),
        fontFamily: 'bold_solid',
        color: '#111111',
        marginBottom: verticalScale(0)
    },
    btn: {
        alignItems: 'center',
        marginRight: scale(10),
        marginLeft: scale(10),
        marginBottom: scale(20)
    },
    btnview: {
        height: verticalScale(59),
        backgroundColor: '#537fe7',
        width: '100%',
        borderRadius: scale(15),
        shadowColor: 'rgba(0,0,0,0.12)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(10),
    },
    btntext: {
        fontSize: RFPercentage(2.50),
        lineHeight: 28,
        fontFamily: 'bold_solid',
        color: '#fff'
    },
    popbox: {
        backgroundColor: '#fff',
        borderColor: '#EEE',
        borderWidth: scale(1),
        elevation: 5,
        width: scale(300),
        height: verticalScale(400),
        alignItems: 'center',
        borderRadius: scale(10),
        justifyContent: 'space-between'
    },
    textone: {
        color: '#666161',
        fontFamily: 'bold_solid',
        fontSize: RFPercentage(2.70),
        textAlign: 'center',
        marginTop: verticalScale(10)
    }
})