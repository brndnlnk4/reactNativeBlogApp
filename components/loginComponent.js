import React, { Component } from 'react'
import { Container, Text, View,Platform, StyleSheet, ScrollView, TouchableOpacity,
        TouchableHighlight, TouchableNativeFeedback, AppRegistry, TextInput, 
        Button, Image, ImageBackground, KeyboardAvoidingView, ActivityIndicator, Alert 
       } from 'react-native';
//import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from 'AsyncStorage'
import axios from 'axios';
import _ from 'lodash';

import $styles from '../assets/styles';
import { LoginIcon } from '../assets/Icons';
import { storeState, getCurrentRouteName } from './helpers';

export default class LoginComponent extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
    }//END state
  }
  
  async loginAttempt(){
    let {password, username} = this.state
          
      if(_.isEmpty(password) || _.isEmpty(username)) return alert('Fields are required')

      let $data = new FormData()

      $data.append('username',username)
      $data.append('password',password)
    
    try{

      const $response = await axios.post("http://10.0.3.2:80/re/", $data,{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      }),
            $responseStatus = await $response.status,
            $responseData = await $response.data;

      if($responseStatus === 200 && $responseData.status){
        ///NAVIGATE TO NEXT SCREEN
        this.props.navigation.navigate('Home', {
          prevScreen: getCurrentRouteName.call(this),
          username,
          password
        }, () => {storeState({username})});
        
      }else throw Error('wtf is with responseStatus: ',$responseStatus)
    }catch(err){
      console.warn('Error: ',err)
    }
  }///END fn()
  
  usernameChangeHandler(username){
    if(!_.trim(username)) return
    
    this.setState({username})
  }///END fn()
  
  passwordChangeHandler(password){
    if(!_.trim(password)) return this.setState({errors: {password:'must enter password'}})
    
    this.setState({password})
  }///END fn()
  
  render(){
    
    return(
      
      <KeyboardAvoidingView behavior='padding' style={$styles.loginWrapper} enable>

        <LoginIcon style={$styles.loginSectionTitle}>login</LoginIcon>
        
        <TextInput 
          maxLength={20}
          title="username" 
          placeholder="Username" 
          style={$styles.inputElements} 
          underlineColorAndroid='transparent'
          defaultValue={this.state.username} 
          onChangeText={this.usernameChangeHandler.bind(this)}
        />
        
        <TextInput 
          maxLength={20}
          secureTextEntry={true}
          title="password" 
          placeholder="Password" 
          style={$styles.inputElements} 
          underlineColorAndroid='transparent'
          defaultValue={this.state.password} 
          onChangeText={this.passwordChangeHandler.bind(this)}
        />
        
        <TouchableHighlight 
         style={$styles.loginButton} 
         onPress={() => this.loginAttempt()}>
          <Text style={$styles.loginButtonText}>Login</Text>
        </TouchableHighlight>
        
      </KeyboardAvoidingView>
    )///END return()
  }//END render()
}//END component

/* createSwitchNavigator (auth flow) scaffolding to use...
import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Sign in!" onPress={this._signInAsync} />
      </View>
    );
  }

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to the app!',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Other');
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class OtherScreen extends React.Component {
  static navigationOptions = {
    title: 'Lots of features here',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="I'm done, sign me out" onPress={this._signOutAsync} />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };
}

class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
*/