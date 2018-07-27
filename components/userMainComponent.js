import React, { Component } from 'react'
import { Text, View,Platform, StyleSheet, ScrollView, TouchableOpacity,
        TouchableHighlight, TouchableNativeFeedback, AppRegistry, TextInput, 
        Image, ImageBackground, KeyboardAvoidingView, ActivityIndicator, Alert, Dimensions, Animated, SafeAreaView,
       } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AsyncStorage from 'AsyncStorage'
import $styles from '../assets/styles'
import axios from 'axios';
import _ from 'lodash';

/*
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import  Octicons from 'react-native-vector-icons/Octicons'
import  EvilIcons from 'react-native-vector-icons/EvilIcons'
import  Feather from 'react-native-vector-icons/Feather'
*/

/*
  style={{
    opacity: this.state.fadeAnim, // Binds directly
    transform: [{
      translateY: this.state.fadeAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
      }),
    }],
  }}
*/

import { Container, Header, Content, Button, Icon, List, ListItem, Root } from 'native-base';
import { getCurrentRouteName, getCurrentRouteParams } from './helpers'

import HomeScreen from './homeComponent';
import ProfileScreen from './profileComponent';
import MessagesScreen from './messagesComponent';


const UserMainAfterLoginWithNavigationTabs = createMaterialBottomTabNavigator({
    Profile: {screen: (props) => (<ProfileScreen />),
              navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({tintColor}) => (<Icon type="FontAwesome" name="user" style={{color:tintColor}} size={20} />)
              }},
    Messages: {screen: (props) => (<Root><MessagesScreen /></Root>),
               navigationOptions: { 
                 tabBarLabel: 'Messages',
                 tabBarIcon: ({tintColor}) => (<Icon type="FontAwesome" name="envelope" style={{color:tintColor}} size={20} />)
               }},
    Home: {screen: (props) => (<HomeScreen {...props} />),
           navigationOptions: {
             tabBarLabel: 'Home',
             tabBarIcon: ({tintColor}) => (<Icon type="FontAwesome" name="home" style={{color:tintColor}} size={20} />)
           }}
  },{
  //  showIcon: true,
    initialRouteName: 'Messages',
    order: ['Profile','Home','Messages'],
    tabBarPosition: 'bottom',
    tintColor: 'white',
    activeTintColor: '#b3e2ff',
    inactiveTintColor: '#002b45',
    barStyle: {
      borderTopWidth: 1,
      borderTopColor: '#888',
      backgroundColor: '#0086d9',
    },
    labeled: true,
    shifting: true,
  })
/*
* this.props.navigation.navigate(screen) //redirects to screen already in stack
* this.props.navigation.goBack() //goes back
* this.props.navigation.popToTop() //goes back to initial screen @ top of stack
* this.props.navigation.push(screen) //redirects to new screen
*/

export default class UserAuthMain extends Component{
  
  render(){
    return(
        <UserMainAfterLoginWithNavigationTabs />
    )///END return()
  }//END render()
}