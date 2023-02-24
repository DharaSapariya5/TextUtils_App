import { View, Text } from 'react-native'
import React from 'react'
import Router from "./src/Router"
import { Provider } from 'react-redux'
import {Mystore} from "./src/Redux/Store"

const App = () => {
  return (
    <Provider store={Mystore}>
      <Router />
    </Provider>
  )
}

export default App