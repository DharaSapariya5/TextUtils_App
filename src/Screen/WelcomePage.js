import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { RFPercentage } from 'react-native-responsive-fontsize'

const WelcomePage = ({ navigation }) => {
    return (
        <View style={styles.contener}>
            <View style={styles.imgbg}>
                <Image source={require("../Image/3d.png")} style={styles.img} />
            </View>
            <View style={styles.textview}>
                <Text style={styles.text}>We Can Connect With{'\n'}<Text style={{ color: '#537fe7' }}>Text Utils🚀</Text></Text>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity
                    style={styles.btnview}
                    onPress={() => navigation.navigate("HomeSreen")}
                >
                    <Text style={styles.btntext}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default WelcomePage

const styles = StyleSheet.create({
    contener: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    imgbg: {
        backgroundColor: '#537fe7',
        marginLeft: scale(10),
        marginRight: scale(10),
        marginTop: verticalScale(10),
        height: verticalScale(400),
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        width: scale(450),
        height: verticalScale(450)
    },
    textview: {
        marginTop: verticalScale(20)
    },
    text: {
        fontSize: RFPercentage(5),
        color: "#111111",
        textAlign: 'center',
        // fontWeight: 'bold',
        fontFamily: "bold_solid"
    },
    btn: {
        alignItems: 'center'
    },
    btnview: {
        width: scale(300),
        height: verticalScale(65),
        backgroundColor: '#d9d9d9',
        borderColor: '#eee',
        borderWidth: scale(0.50),
        borderRadius: scale(15),
        shadowColor: 'rgba(0,0,0,0.12)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(10),
    },
    btntext: {
        // fontWeight: 'bold',
        fontSize: RFPercentage(2.50),
        lineHeight: 28,
        fontFamily: 'bold_solid',
        color: '#545151'
    }
})