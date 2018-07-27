import React, { Component } from 'react'
import { Container, Text, View,Platform, StyleSheet, ScrollView, TouchableOpacity,
        TouchableHighlight, AppRegistry, TextInput, Button, Image, ImageBackground,
        KeyboardAvoidingView, ActivityIndicator, Alert, fetch } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import axios from 'axios';
import { storeState } from './components/helpers'

import UserAuthMain from './components/userMainComponent';
import Login from './components/loginComponent';
import Header from './components/headerComponent';

const AppComposedWithNav = createStackNavigator({
  UserAuthMain: {
    screen: (props) => (<UserAuthMain {...props} />),
    navigationOptions: {
      title: 'Logged In Section',
      header: null,
      headerTitle: null
    }
  },//END HomeScreen
  Login: {
    screen: (props) => (<Login {...props} />),
    navigationOptions: {
      title: 'Login Section',
      header: null,
      headerTitle: null
    }
  }, ///END LoginScreen
}, {
//  initialRouteName: 'Login',
  navigationOptions: {
    header: false
  }//END navigationOptions
});///END AppComposedWithNav returns: 'javascript class'

class Component1 extends Component{
  
  render(){
    return(
        <AppComposedWithNav />
    )///END return()
  }//END render()
}//END component

AppRegistry.registerComponent('ReactNativeTest1', () => Component1);