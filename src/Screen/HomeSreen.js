import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { RFPercentage } from 'react-native-responsive-fontsize'
import Clipboard from '@react-native-clipboard/clipboard';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeSreen = ({ navigation }) => {
  const [defaultText, setDefaultText] = useState('');

  const convertTextToUpperCase = () => {
    let upperCaseText = defaultText.toUpperCase();
    setDefaultText(upperCaseText);
  };

  const convertTextToLowerCase = () => {
    let lowerCaseText = defaultText.toLowerCase();
    setDefaultText(lowerCaseText);
  };

  const handleClearClick = () => {
    let newText = '';
    setDefaultText(newText);
  };

  const handleCopy = () => {
    Clipboard.setString(defaultText);
    alert(`"${defaultText}" copied to clipboard!`);
  };

  const handleExtraSpaces = () => {
    const newText = defaultText.replace(/\s+/g, ' ').trim();
    setDefaultText(newText);
    console.log("Extra Spaces Removed sucesfully your output", newText)

  };

  const onChangeText = (defaultText) => {
    setDefaultText(defaultText);
  };

  const convertTextToTitleCase = () => {
    let camelCaseText = defaultText
      .split(' ')
      .map(function (word, index) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(' ');
    setDefaultText(camelCaseText);
  };

  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()}
        >
          <Image source={require("../Image/menu.png")} style={styles.menulogo} />
        </TouchableOpacity>
        <Text style={styles.headertext}>Home</Text>
      </View>

      <ScrollView horizontal={true}>
        <View>
          <View style={styles.textarea}>
            <TextInput
              placeholder="Enter Your Text To Convert UpperCase!!"
              placeholderTextColor={'#666161'}
              textAlignVertical="top"
              multiline={true}
              style={{
                padding: 10,
                width: windowWidth / 1.10,
                height: verticalScale(350),
                borderColor: '#fff',
                backgroundColor: '#f3f3f3',
                borderWidth: 1,
                borderRadius: scale(10),
                fontSize: RFPercentage(2),
                fontFamily: 'regular',
              }}
              onChangeText={onChangeText}
              value={defaultText}
            />
          </View>

          <Text style={styles.textsummy}>{defaultText.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <Text style={{ color: '#111', fontFamily: 'regular' }}>words and</Text> {defaultText.length} <Text style={{ color: '#111', fontFamily: 'regular' }}>characters</Text></Text>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnview}
              onPress={convertTextToUpperCase}
            >
              <Text style={styles.btntext}>Text to Uppercase</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: scale(20), marginLeft: scale(20) }}>
            <View style={{}}>
              <TouchableOpacity
                style={[styles.btnview, { width: scale(150), backgroundColor: '#d9d9d9' }]}
                onPress={handleClearClick}
              >
                <Text style={[styles.btntext, { color: '#545151' }]}>Clear Text</Text>
              </TouchableOpacity>
            </View>

            <View style={{}}>
              <TouchableOpacity
                style={[styles.btnview, { width: scale(150), backgroundColor: '#d9d9d9' }]}
                onPress={handleCopy}
              >
                <Text style={[styles.btntext, { color: '#545151' }]}>Copy Text</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Text style={[styles.textsummy, { fontFamily: 'regular', marginLeft: verticalScale(0) }]}>Text To Lowercase</Text>
            <Image source={require("../Image/next.png")} style={{ width: scale(30), height: scale(30) }} />
          </View>
        </View>

        <View>
          <View style={styles.textarea}>
            <TextInput
              placeholder="Enter Your Text To Convert LowerCase!!"
              placeholderTextColor={'#666161'}
              textAlignVertical="top"
              multiline={true}
              style={{
                padding: 8,
                width: windowWidth / 1.10,
                height: verticalScale(350),
                borderColor: '#fff',
                backgroundColor: '#f3f3f3',
                borderWidth: 1,
                borderRadius: scale(10),
                fontSize: RFPercentage(2),
                fontFamily: 'regular',
              }}
              onChangeText={onChangeText}
              value={defaultText}
            />
          </View>
          <Text style={styles.textsummy}>{defaultText.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <Text style={{ color: '#111', fontFamily: 'regular' }}>words and</Text> {defaultText.length} <Text style={{ color: '#111', fontFamily: 'regular' }}>characters</Text></Text>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnview}
              onPress={convertTextToLowerCase}
            >
              <Text style={styles.btntext}>Text to Lowercase</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: scale(20), marginLeft: scale(20) }}>
            <View style={{}}>
              <TouchableOpacity
                style={[styles.btnview, { width: scale(150), backgroundColor: '#d9d9d9' }]}
                onPress={handleClearClick}
              >
                <Text style={[styles.btntext, { color: '#545151' }]}>Clear Text</Text>
              </TouchableOpacity>
            </View>

            <View style={{}}>
              <TouchableOpacity
                style={[styles.btnview, { width: scale(150), backgroundColor: '#d9d9d9' }]}
                onPress={handleCopy}
              >
                <Text style={[styles.btntext, { color: '#545151' }]}>Copy Text</Text>
              </TouchableOpacity>
            </View>

          </View>

          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Text style={[styles.textsummy, { fontFamily: 'regular', marginLeft: verticalScale(0) }]}>Text To Lowercase</Text>
            <Image source={require("../Image/next.png")} style={{ width: scale(30), height: scale(30) }} />
          </View>
        </View>

        <View>
          <View style={styles.textarea}>
            <TextInput
              placeholder="Enter Your Text To Removed Extra Spaces!!"
              placeholderTextColor={'#666161'}
              textAlignVertical="top"
              multiline={true}
              style={{
                padding: 10,
                width: windowWidth / 1.10,
                height: verticalScale(350),
                borderColor: '#fff',
                backgroundColor: '#f3f3f3',
                borderWidth: 1,
                borderRadius: scale(10),
                fontSize: RFPercentage(2),
                fontFamily: 'regular',
              }}
              onChangeText={onChangeText}
              value={defaultText}
            />
          </View>

          <Text style={styles.textsummy}>{defaultText.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <Text style={{ color: '#111', fontFamily: 'regular' }}>words and</Text> {defaultText.length} <Text style={{ color: '#111', fontFamily: 'regular' }}>characters</Text></Text>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnview}
              onPress={handleExtraSpaces}
            >
              <Text style={styles.btntext}>Remove Extra Space</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: scale(20), marginLeft: scale(20) }}>
            <View style={{}}>
              <TouchableOpacity
                style={[styles.btnview, { width: scale(150), backgroundColor: '#d9d9d9' }]}
                onPress={handleClearClick}
              >
                <Text style={[styles.btntext, { color: '#545151' }]}>Clear Text</Text>
              </TouchableOpacity>
            </View>

            <View style={{}}>
              <TouchableOpacity
                style={[styles.btnview, { width: scale(150), backgroundColor: '#d9d9d9' }]}
                onPress={handleCopy}
              >
                <Text style={[styles.btntext, { color: '#545151' }]}>Copy Text</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Text style={[styles.textsummy, { fontFamily: 'regular', marginLeft: verticalScale(0) }]}>Text To Title Case</Text>
            <Image source={require("../Image/next.png")} style={{ width: scale(30), height: scale(30) }} />
          </View>
        </View>

        <View>
          <View style={styles.textarea}>
            <TextInput
              placeholder="Enter Your Text To Removed Extra Spaces!!"
              placeholderTextColor={'#666161'}
              textAlignVertical="top"
              multiline={true}
              style={{
                padding: 10,
                width: windowWidth / 1.10,
                height: verticalScale(350),
                borderColor: '#fff',
                backgroundColor: '#f3f3f3',
                borderWidth: 1,
                borderRadius: scale(10),
                fontSize: RFPercentage(2),
                fontFamily: 'regular',
              }}
              onChangeText={onChangeText}
              value={defaultText}
            />
          </View>

          <Text style={styles.textsummy}>{defaultText.split(/\s+/).filter((element) => { return element.length !== 0 }).length} <Text style={{ color: '#111', fontFamily: 'regular' }}>words and</Text> {defaultText.length} <Text style={{ color: '#111', fontFamily: 'regular' }}>characters</Text></Text>
          <View style={styles.btn}>
            <TouchableOpacity
              style={styles.btnview}
              onPress={convertTextToTitleCase}
            >
              <Text style={styles.btntext}>Text To Title Case</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: scale(20), marginLeft: scale(20) }}>
            <View style={{}}>
              <TouchableOpacity
                style={[styles.btnview, { width: scale(150), backgroundColor: '#d9d9d9' }]}
                onPress={handleClearClick}
              >
                <Text style={[styles.btntext, { color: '#545151' }]}>Clear Text</Text>
              </TouchableOpacity>
            </View>

            <View style={{}}>
              <TouchableOpacity
                style={[styles.btnview, { width: scale(150), backgroundColor: '#d9d9d9' }]}
                onPress={handleCopy}
              >
                <Text style={[styles.btntext, { color: '#545151' }]}>Copy Text</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <Text style={[styles.textsummy, { fontFamily: 'regular', marginLeft: verticalScale(0) }]}>Text To Title Case</Text>
            <Image source={require("../Image/next.png")} style={{ width: scale(30), height: scale(30) }} />
          </View> */}
        </View>

      </ScrollView>
    </View>
  )
}

export default HomeSreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff'
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
  textarea: {
    // flex: 1,
    padding: 8,
    marginLeft: scale(10),
    marginRight: scale(10)
  },
  textsummy: {
    color: '#111111',
    fontSize: RFPercentage(3),
    marginLeft: verticalScale(25),
    fontFamily: 'bold_solid',

  },
  btn: {
    alignItems: 'center',
    marginTop: verticalScale(10)
  },
  btnview: {
    width: scale(300),
    height: verticalScale(55),
    backgroundColor: '#537FE7',
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
  }

})