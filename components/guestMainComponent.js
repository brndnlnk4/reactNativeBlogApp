import React, { Component } from 'react'
import { Container, Text, View,Platform, StyleSheet, ScrollView, TouchableOpacity,
        TouchableHighlight, TouchableNativeFeedback, AppRegistry, TextInput, Button, 
        Image, ImageBackground, KeyboardAvoidingView, ActivityIndicator, Alert, Dimensions,
        Animated, SafeAreaView,
       } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AsyncStorage from 'AsyncStorage'
import $styles from '../assets/styles'
import axios from 'axios';
import _ from 'lodash';

import { getCurrentRouteName, getCurrentRouteParams } from './helpers'

import HomeScreen from './homeComponent';
import ProfileScreen from './profileComponent';
import MessagesScreen from './messagesComponent';

const UserMainAfterLoginWithNavigationTabs = createMaterialBottomTabNavigator({
  Profile: {screen: ProfileScreen,
                 navigatorOptions: {
                   tabBarLabel: 'Profile',
                   tabBarIcon: <FontAwesome name='user' color='#333' size={30} />
                 }},
  Messages: {screen: MessagesScreen,
                 navigatorOptions: {
                   tabBarLabel: 'Messages',
                   tabBarIcon: <FontAwesome name='user' color='#333' size={30} />
                 }},
  Home: {screen: HomeScreen,
                 navigatorOptions: {
                   tabBarLabel: 'Home',
                   tabBarIcon: <FontAwesome name='user' color='#333' size={30} />
                 }},
},{
  initialRouteName: 'Home',
  order: ['Profile','Home','Messages'],
  activeTintColor: '#7181ff',
  inactiveTintColor: '#7181ff'
//  tabBarPosition: 'bottom',
//  shifting: true,
})
/*
* this.props.navigation.navigate(screen) //redirects to screen already in stack
* this.props.navigation.goBack() //goes back
* this.props.navigation.popToTop() //goes back to initial screen @ top of stack
* this.props.navigation.push(screen) //redirects to new screen
*/
export default class UserMainComponent extends Component{

  render(){
    return(
        <UserMainAfterLoginWithNavigationTabs />
    )
  }//END render()
}