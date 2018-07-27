import React, { Component } from 'react'
import { Container, Text, View,Platform, StyleSheet, ScrollView, TouchableOpacity,
        TouchableHighlight, AppRegistry, TextInput, Button, Image, ImageBackground,
        KeyboardAvoidingView, ActivityIndicator, Alert, fetch } from 'react-native';
import { StackNavigator } from 'react-navigation';
import axios from 'axios';

export default class HeaderComponent extends Component{
  
  constructor(props){
    super(props)
    ///
  }
  
  render(){
    return(
      <View>
        <Text>Header Comp</Text>
      </View>
    )///END return()
  }//END render()
}//END component