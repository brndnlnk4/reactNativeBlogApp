import React, { Component } from 'react'
import { Text, View,Platform, StyleSheet, ScrollView, TouchableOpacity,
        TouchableHighlight, TouchableNativeFeedback, AppRegistry, TextInput, 
        Image, ImageBackground, KeyboardAvoidingView, ActivityIndicator, Alert, Dimensions, Animated, SafeAreaView,
       } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';
import AsyncStorage from 'AsyncStorage'
import $styles from '../assets/styles'
import axios from 'axios';
import _ from 'lodash';

import { getCurrentRouteName, getCurrentRouteParams } from './helpers'

/*
* this.props.navigation.navigate(screen) //redirects to screen already in stack
* this.props.navigation.goBack() //goes back
* this.props.navigation.popToTop() //goes back to initial screen @ top of stack
* this.props.navigation.push(screen) //redirects to new screen
*/

class ProfileEdits extends Component{
  
  render(){
    return(
      <ScrollView>
        <KeyboardAvoidingView>

          <Container style={{height:'100%',justifyContent:'center',alignItems:'center', backgroundColor:'#fff' }} >

            <View style={{ flex:2 }}>
               <View style={{ marginTop:10,width:180,height:180 }} >               
                <Image source={require('../assets/pics/7.jpg')} style={{flex:1,width:null,maxHeight:null,borderRadius:90,borderWidth:3,borderColor:'#868686'}} resizeMode='cover' />
               </View>
            </View>
          
            <View style={{ flex:1,width:'100%',justifyContent:'center',alignItems:'center' }} >
              <View style={{ width:'80%',marginTop:25,paddingVertical:10 }} >
                <Icon style={{ textAlign:'left',fontSize:18,color:'#444' }} name='user' type='FontAwesome'> Add your Username</Icon>
                <TextInput placeholder="Username" underlineColorAndroid='transparent' style={{backgroundColor:'#dddddd',paddingHorizontal:5,borderRadius:5}} />
              </View>

              <View style={{ width:'80%',marginTop:25,paddingVertical:10 }} >
                <Icon style={{ textAlign:'left',fontSize:18,color:'#444' }} name='phone' type='FontAwesome'> Add Phone Number</Icon>
                <TextInput placeholder="Phone" underlineColorAndroid='transparent' style={{backgroundColor:'#dddddd',paddingHorizontal:5,borderRadius:5}} />
              </View>

              <View style={{ width:'80%',marginTop:25,paddingVertical:10 }} >
                <Icon style={{ textAlign:'left',fontSize:18,color:'#444' }} name='spoon' type='FontAwesome'> Add Favorite Food</Icon>
                <TextInput placeholder="Favorite Food" underlineColorAndroid='transparent' style={{backgroundColor:'#dddddd',paddingHorizontal:5,borderRadius:5}}  />
              </View>

              <View style={{ width:'80%',marginTop:25,marginBottom:15,paddingVertical:10 }} >
                <Icon style={{ textAlign:'left',fontSize:18,color:'#444' }} name='film' type='FontAwesome'> Add Favorite Movie</Icon>
                <TextInput placeholder="Favorite Movie" underlineColorAndroid='transparent' style={{backgroundColor:'#dddddd',paddingHorizontal:5,borderRadius:5}}  />
              </View>
            </View>
          
          </Container>
        </KeyboardAvoidingView>
      </ScrollView>
    )////END return
  }///END render
}///END class

class ProfileView extends Component{
    
  render(){
    
    return(
      <ScrollView>
        <KeyboardAvoidingView>

          <Container style={{height:'100%',justifyContent:'center',alignItems:'center', backgroundColor:'#fff' }} >

            <View style={{ flex:2 }}>
               <View style={{ marginTop:10,width:230,height:230 }} >               
                <Image source={require('../assets/pics/7.jpg')} style={{flex:1,width:null,maxHeight:null,borderWidth:3,borderColor:'#868686'}} resizeMode='cover' />
               </View>
            </View>
            
            <View style={{ flex:1,paddingVertical:10,width:'100%',justifyContent:'center',alignItems:'center' }} >
              <View style={{marginHorizontal:15,paddingVertical:10 }} >
                <Icon style={{ textAlign:'left',fontSize:18,color:'#444' }} name='user' type='FontAwesome'> Fullname Here</Icon>
              </View>
            </View>
          
            <View style={{ flex:1,flexDirection:'row',paddingVertical:10,width:'100%',justifyContent:'center',alignItems:'center' }} >
              <View style={{marginHorizontal:15,paddingVertical:10 }} >
                <Icon style={{ textAlign:'left',fontSize:18,color:'#444' }} name='user' type='FontAwesome'> Username Here</Icon>
              </View>
              <View style={{marginHorizontal:10,paddingVertical:10 }} >
                <Icon style={{ textAlign:'left',fontSize:18,color:'#444' }} name='phone' type='FontAwesome'> Phone Here</Icon>
              </View>
            </View>
            
             <View style={{ flex:1,flexDirection:'row',paddingVertical:10,width:'100%',justifyContent:'center',alignItems:'center' }} >
              <View style={{marginHorizontal:15,paddingVertical:10 }} >
                <Icon style={{ textAlign:'left',fontSize:18,color:'#444' }} name='user' type='FontAwesome'> Username Here</Icon>
              </View>
              <View style={{marginHorizontal:10,paddingVertical:10 }} >
                <Icon style={{ textAlign:'left',fontSize:18,color:'#444' }} name='phone' type='FontAwesome'> Phone Here</Icon>
              </View>
            </View>
          
          </Container>
        </KeyboardAvoidingView>
      </ScrollView>
    )///END return()
  }//END render()
}//END component

export default createMaterialTopTabNavigator({
    ProfileView: {screen: (props) => (<ProfileView {...props} />),
              navigationOptions: {
                tabBarLabel: ({tintColor}) => (<Icon type="FontAwesome" name="user" size={20} style={{color:tintColor}} />),
              }},
    ProfileEdits: {screen: (props) => (<ProfileEdits {...props} />),
              navigationOptions: {
                tabBarLabel: ({tintColor}) => (<Icon type="FontAwesome" name="edit" size={20} style={{color:tintColor}} />),
              }},
  },{
//    showIcon: true,
    initialRouteName: 'ProfileView',
    tabBarPosition: 'top',
    tintColor: 'white',
    activeTintColor: '#b3e2ff',
    inactiveTintColor: '#002b45',
    order: ['ProfileView','ProfileEdits'],
    barStyle: {
      borderTopWidth: 1,
      borderTopColor: '#888',
      backgroundColor: '#0086d9',
    },
    labeled: true,
    shifting: true,
  })