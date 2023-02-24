import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  createStackNavigator,
  // HeaderStyleInterpolators,
  // StackCardInterpolationProps,
  // StackNavigationOptions,
  // TransitionSpecs,
} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { scale } from 'react-native-size-matters';
import { ActivityIndicator, Image, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import HomeSreen from './Screen/HomeSreen';
import Splash from './Screen/Splash';
import CustomeDrawer from './CustomeDrawer';
import Login from './Screen/Login';
import WelcomePage from "./Screen/WelcomePage"
import About from './Screen/About';
import WelSplash from "./Screen/WelSplash"

import { useDispatch, useSelector } from 'react-redux';
import Logout from './Screen/Logout';
import { Init } from './Redux/Actions';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


// export const horizontalAnimation: StackNavigationOptions = {
//   gestureDirection: 'horizontal',
//   transitionSpec: {
//     open: TransitionSpecs.TransitionIOSSpec,
//     close: TransitionSpecs.TransitionIOSSpec,
//   },
//   headerStyleInterpolator: HeaderStyleInterpolators.forFade,
//   cardStyleInterpolator: ({
//     current,
//     layouts,
//   }: StackCardInterpolationProps) => {
//     return {
//       cardStyle: {
//         transform: [
//           {
//             translateX: current.progress.interpolate({
//               inputRange: [0, 1],
//               outputRange: [layouts.screen.width, 0],
//             }),
//           },
//         ],
//       },
//     };
//   },
// };

// export const verticalAnimation: StackNavigationOptions = {
//   gestureDirection: 'vertical',
//   transitionSpec: {
//     open: TransitionSpecs.TransitionIOSSpec,
//     close: TransitionSpecs.TransitionIOSSpec,
//   },
//   headerStyleInterpolator: HeaderStyleInterpolators.forSlideUp,
//   cardStyleInterpolator: ({
//     current,
//     layouts,
//   }: StackCardInterpolationProps) => {
//     return {
//       cardStyle: {
//         transform: [
//           {
//             translateY: current.progress.interpolate({
//               inputRange: [0, 1],
//               outputRange: [layouts.screen.height, 0],
//             }),
//           },
//         ],
//       },
//     };
//   },
// };

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={props => <CustomeDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: scale(250),
        },
        drawerLabelStyle: { fontSize: RFPercentage(2.60), color: '#000', fontFamily: 'regular', margin: 5 }
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeSreen}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          // title: "Home",
          drawerIcon: ({ color }) => (
            <Image style={{ width: scale(20), height: scale(20) }}
              source={require("./Image/home.png")} />
          )
        }}
      />
      <Drawer.Screen
        name="About"
        component={About}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          // title: "About",
          drawerIcon: ({ color }) => (
            <Image style={{ width: scale(20), height: scale(20) }}
              source={require("./Image/about.png")} />
          )
        }}
      />

      <Drawer.Screen
        name="Logout"
        component={Logout}
        screenOptions={{
          headerShown: false,
        }}
        options={{
          title: "LogOut",
          drawerIcon: ({ color }) => (
            <Image style={{ width: scale(20), height: scale(20) }}
              source={require("./Image/logout.png")} />
          )
        }}
      />
    </Drawer.Navigator>
  );
}

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="WelSplash" component={WelSplash} />
      <Stack.Screen name="WelcomePage" component={WelcomePage} />
      <Stack.Screen name="HomeSreen" component={MyDrawer} />
    </Stack.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Splash" component={Splash} /> */}
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  )
}


const RootNavigation = () => {
  const token = useSelector(state => state.AuthReducer.authToken);
  // const token1 = useSelector(state => state.AuthReducer.authTokenMail);


  const [loading, setLoading] = React.useState(true);
  // const [newtoken, setNewtoken] = React.useState('');

  const dispatch = useDispatch();

  const init = async () => {
    await dispatch(Init());
    setLoading(false)
  };

  React.useEffect(() => {
    // if (token !== null) {
    //   setNewtoken(token)
    // } else if (token1 !== null) {
    //   setNewtoken(token1)
    // }
    setTimeout(() => {
      init();
    }, 5000);
    // init()
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center',alignItems:'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }
  return (
    <NavigationContainer>
      {
        token === null ? // token1 === null ?
          <AuthStack />
          :
          <MyStack />
      }
    </NavigationContainer>
  );
}

function App() {
  return (
    <RootNavigation />
  );
}

export default App;
