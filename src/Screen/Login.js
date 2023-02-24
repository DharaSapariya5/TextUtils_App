import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { scale, verticalScale } from 'react-native-size-matters'
import { RFPercentage } from 'react-native-responsive-fontsize'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux'
import { UserLogin, UserMailLogin } from "../Redux/Actions"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';


const Login = ({ navigation }) => {
  const [img, setImg] = React.useState(null);
  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordVisibility, setPasswordVisibility] = React.useState(true);
  const [rightIcon, setRightIcon] = React.useState('eye');
  const [checkValidPassword, setCheckValidPassword] = React.useState(false)
  const dispatch = useDispatch();

  const _singnIn = async () => {
    GoogleSignin.configure({
      scopes: [],
      webClientId: '196307732026-9746r8qm57sbseoedllrtns89r8j80t2.apps.googleusercontent.com',
      offlineAccess: true,
    });

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("UserInfo", userInfo.user)
      console.log("User Name", userInfo.user.name)
      console.log("User Phote", userInfo.user.photo)
      // setImg(userInfo.user.photo)
      setName(userInfo.user.name);
      dispatch(UserMailLogin(name))
      // try {
      //   if (name != null || id != null) {
      //     console.log("some thing", name);
      //     console.log("some thing", id);
      //     dispatch(UserMailLogin(name, id))
      //   } else {
      //     console.log("some thing is messing")
      //   }
      // } catch {
      //   console.log(error)
      // }

    }
    catch (error) {
    console.log(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('user cancelled the login');
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('is in progress already');
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('play services not avaliable or outdata');
    } else {
      //some other error
    }
  }
};

const handlePasswordVisibility = () => {
  if (rightIcon === 'eye') {
    setRightIcon('eye-slash');
    setPasswordVisibility(!passwordVisibility);
  } else if (rightIcon === 'eye-slash') {
    setRightIcon('eye');
    setPasswordVisibility(!passwordVisibility);
  }
};

const HandleCheckPass = (text) => {

  setPassword(text)
  if (password.length < 8) {
    setCheckValidPassword(true);
  } else {
    setCheckValidPassword(false);
  }
};

const handleLogin = () => {
  if (username) {
    AsyncStorage.setItem('any_key_here', username);
    console.log('Data Saved');
    dispatch(UserLogin(username, password))
  } else {
    alert('Please fill data');
  }
};

const handleFbLogin = () => {
  alert("hello Fb")
};

const handleTwLogin = () => {
  alert("hello tw")
}

return (
  <View style={styles.contenier}>
    <View style={styles.textview}>
      <Text style={styles.text}>Hello, Welcome To {'\n'}<Text style={{ color: '#537fe7' }}>TextUtils</Text></Text>
    </View>

    <View style={{ marginTop: verticalScale(10) }}>
      <View>
        <View style={styles.inputbox}>
          <Image source={require("../Image/user.png")} style={styles.emailicon} />
          <TextInput
            style={[styles.input]}
            onChangeText={(text) => setUsername(text)}
            value={username}
            placeholder="Username"
            placeholderTextColor={'#666161'}
            cursorColor={"#111111"}
            autoFocus={true}
            blurOnSubmit={true}
          />
        </View>
      </View>

      <View>
        <View style={styles.inputbox}>
          <Image source={require("../Image/pass.png")} style={styles.emailicon} />
          <TextInput
            style={styles.input}
            onChangeText={HandleCheckPass}
            value={password}
            placeholder="Enter Your Password"
            placeholderTextColor={'#666161'}
            secureTextEntry={passwordVisibility}
            autoCorrect={false}
            enablesReturnKeyAutomatically
            cursorColor={"#111111"}
          />
          <View style={styles.eyeicon}>
            <TouchableOpacity onPress={handlePasswordVisibility}>
              <FontAwesome name={rightIcon} size={scale(29)} color="#111111" />
            </TouchableOpacity>
          </View>
        </View>
        {password.length == 0 ?
          null
          : password.length < 8 ?
            <Text
              style={{ color: 'red', fontWeight: 'bold', fontSize: RFPercentage(1.80), marginLeft: scale(25), marginTop: verticalScale(5) }}>
              Password Must be 8 Characters</Text>
            : null}
      </View>

    </View>

    {/* {text == '' || password.length < 8 || checkValidEmail == true || name == '' || password == '' ? ( */}
    {password.length < 8 || username == '' || password == '' ? (
      <View style={styles.btn}>
        <TouchableOpacity
          style={[styles.btnview, { backgroundColor: '#95BDFF' }]}
          onPress={() => handleLogin}
          disabled={true}
        >
          <Text style={[styles.btntext, { color: '#fff' }]}>Sing In</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={styles.btn}>
        <TouchableOpacity
          style={[styles.btnview]}
          onPress={() => handleLogin()}
        >
          <Text style={styles.btntext}>Sing In</Text>
        </TouchableOpacity>
      </View>
    )}

    <View style={{
      alignItems: 'center', flexDirection: 'row',
      justifyContent: 'space-evenly', marginBottom: verticalScale(50), 
      marginTop: verticalScale(50)
    }}>
      <View style={{ width: scale(70), height: verticalScale(2), backgroundColor: '#111111' }} />
      <Text style={{ color: '#111111', fontFamily: 'bold_solid', fontSize: RFPercentage(2) }}>Or Sing With</Text>
      <View style={{ width: scale(70), height: verticalScale(2), backgroundColor: '#111111' }} />
    </View>

    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly' }}>
      <TouchableOpacity style={{
        width: scale(300),
        height: verticalScale(50),
        borderColor: '#eee',
        elevation: scale(0),
        borderWidth:scale(1),
        borderRadius: scale(10),
        alignItems: 'center',
        justifyContent: 'center',
      }}
        onPress={() => _singnIn()}
      >
        <View style={{ flexDirection: 'row', textAlign:'center',alignItems:'center' }}>
          <Image source={require("../Image/google.png")} 
          style={{ width: scale(30), height: scale(30),marginLeft:scale(10) }} />
          <Text 
          style={{fontFamily:'bold_solid',fontSize:RFPercentage(3),margin:5,color:'#000'}}>Google</Text>
        </View>
      </TouchableOpacity>
{/* 
      <TouchableOpacity style={{
        width: scale(50),
        height: verticalScale(50),
        backgroundColor: '#eee',
        borderRadius: scale(40),
        elevation: scale(5),
        alignItems: 'center',
        justifyContent: 'center',
      }}
        onPress={() => handleFbLogin()}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Image source={require("../Image/fb.png")} style={{ width: scale(35), height: scale(35) }} />
        </View>
      </TouchableOpacity> */}

      {/* <TouchableOpacity style={{
        width: scale(50),
        height: verticalScale(50),
        backgroundColor: '#eee',
        elevation: scale(5),
        borderRadius: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
      }}
        onPress={() => handleTwLogin()}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
          <Image source={require("../Image/tw.png")} style={{ width: scale(30), height: scale(30) }} />
        </View>
      </TouchableOpacity> */}
    </View>
  </View>
)
}
export default Login

const styles = StyleSheet.create({
  contenier: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'space-between'
  },
  textview: {
    marginTop: verticalScale(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: RFPercentage(4),
    color: "#111111",
    textAlign: 'center',
    fontFamily: 'bold_solid'
  },
  inputbox: {
    marginLeft: verticalScale(20),
    marginRight: verticalScale(20),
    height: verticalScale(60),
    borderRadius: verticalScale(15),
    shadowColor: 'rgba(0,0,0,0.12)',
    backgroundColor: '#f3f3f3',
    borderColor: '#eee',
    borderWidth: scale(0.50),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  emailicon: {
    width: scale(25),
    height: scale(25),
    marginLeft: scale(10)
  },
  eyeicon: {
    width: scale(30),
    height: scale(30),
    marginLeft: scale(20)
  },
  input: {
    borderRadius: verticalScale(15),
    marginLeft: scale(10),
    width: scale(200),
    fontSize: RFPercentage(2.20),
    fontFamily: 'regular'
  },
  btn: {
    alignItems: 'center',
    marginRight: scale(10),
    marginLeft: scale(10),
    marginTop: scale(50)
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
  }
})