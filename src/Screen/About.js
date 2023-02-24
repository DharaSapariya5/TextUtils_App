import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { verticalScale, scale } from 'react-native-size-matters'
import { RFPercentage } from 'react-native-responsive-fontsize'
import { ScrollView } from 'react-native-gesture-handler'


const About = ({ navigation }) => {
    return (
        <View style={styles.contenir}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Image source={require("../Image/menu.png")} style={styles.menulogo} />
                </TouchableOpacity>
                <Text style={styles.headertext}>About Us</Text>
            </View>

            <ScrollView
            scrollEnabled={true}
            >
                <View style={{ margin: 5, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={styles.text}>1. Analyze Your text</Text>
                        <Text style={styles.body}>Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>2. Free to use</Text>
                        <Text style={styles.body}>TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</Text>
                    </View>

                    <View>
                        <Text style={styles.text}>3. Browser Compatible</Text>
                        <Text style={styles.body}>This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</Text>
                    </View>
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <TouchableOpacity
                        style={[styles.btnview]}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={[styles.btntext]}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default About

const styles = StyleSheet.create({
    contenir: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    },
    header: {
        backgroundColor: '#fff',
        width: "100%",
        borderBottomWidth: scale(1),
        borderBottomColor: '#111111',
        height: verticalScale(70),
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
    text: {
        color: '#111111',
        fontFamily: 'bold_solid',
        fontSize: RFPercentage(3),
        marginTop: verticalScale(10),
        marginBottom: verticalScale(10)
    },
    body: {
        color: '#111111',
        fontFamily: 'regular',
        fontSize: RFPercentage(2.70),
        marginLeft: scale(25),
        marginRight: scale(5),
        marginBottom: verticalScale(10)
    },
    btnview: {
        width: scale(150),
        height: verticalScale(65),
        backgroundColor: '#d9d9d9',
        borderRadius: scale(15),
        shadowColor: 'rgba(0,0,0,0.12)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: verticalScale(10),
    },
    btntext: {
        fontWeight: 'bold',
        fontSize: RFPercentage(2.50),
        lineHeight: 28,
        fontFamily: 'Roboto',
        color: '#545151'
    }
})

