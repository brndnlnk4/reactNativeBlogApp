import React, { Component } from 'react'
import { Container, Text, View,Platform, StyleSheet, ScrollView, TouchableOpacity,
        TouchableHighlight, TouchableNativeFeedback, AppRegistry, TextInput, Button, 
        Image, ImageBackground, KeyboardAvoidingView, ActivityIndicator, Alert, Dimensions, Animated, SafeAreaView,
       } from 'react-native';
import { Icon } from 'native-base';
import { createMaterialTopTabNavigator } from 'react-navigation';
import AsyncStorage from 'AsyncStorage'
import $styles from '../assets/styles'
import axios from 'axios';
import _ from 'lodash';

import HomeTopImages from './partials/homeComponentTopImages';
import HomeBottomImages from './partials/homeComponentBottomImages';

import { getCurrentRouteName, getCurrentRouteParams } from './helpers'


/*
* this.props.navigation.navigate(screen) //redirects to screen already in stack
* this.props.navigation.goBack() //goes back
* this.props.navigation.popToTop() //goes back to initial screen @ top of stack
* this.props.navigation.push(screen) //redirects to new screen
*/
export default class HomeScreen extends Component{
    
  constructor(props){
    super(props)

    this.scrollY = new Animated.Value(0);
    this.currentRouteName = getCurrentRouteName.call(this);
    this.animatedOpacityFade = this.scrollY.interpolate({
      inputRange: [0,180],
      outputRange: [1,0],
//      extrapolate: 'clamp' \ 
    })
  }
  
  componentDidMount(){
    this.scrollY.addListener(event => console.log("<HomeComp/>: ",JSON.stringify(this.scrollY)))
  }
  
  render(){
    const { navigate, popToTop } = this.props.navigation
    
    return(        
        <ScrollView scrollEventThrottle={8} style={{height:'100%'}} onScroll={            Animated.event([
              {nativeEvent: {contentOffset: {y: this.scrollY}}}
          ])}
        >

          <Animated.View style={{ opacity: this.animatedOpacityFade }}>

            <View style={{height:180, marginBottom:10}}>              
              <Icon name="home" type="FontAwesome" style={{ color:'#fff',backgroundColor:'#48a6e0',paddingVertical:10,textAlign:'center',width:'100%'}} />
              
              <Image style={{ flex:1,width:null,height:null }} source={require('../assets/pics/5.jpg')} resizeMode='cover' />
            </View>

          </Animated.View>    

          <View style={{flexDirection:'column',flex:1,justifyContent:'center',alignItems:'center'}}>

           <View style={{ width:'100%',height:40,backgroundColor: '#0086d9',paddingLeft:10 }}>
             <Text style={{ fontWeight:'500',fontSize:20,color:'#ffffff' }}>Start making plans now!</Text>           
           </View>

            <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>

              <HomeTopImages title='Vacation' imageUrl={require('../assets/pics/3.jpg')} />
              <HomeTopImages title='Brothel' imageUrl={require('../assets/pics/5.jpg')} />
              <HomeTopImages title='School' imageUrl={require('../assets/pics/7.jpg')} />
              <HomeTopImages title='Club' imageUrl={require('../assets/pics/6.jpg')} />
              <HomeTopImages title='Bar' imageUrl={require('../assets/pics/1.jpg')} />
              <HomeTopImages title='Bar' imageUrl={require('../assets/pics/1.jpg')} />
              <HomeTopImages title='Club' imageUrl={require('../assets/pics/6.jpg')} />
              <HomeTopImages title='School' imageUrl={require('../assets/pics/7.jpg')} />

            </ScrollView>

            <View style={{width:'100%',marginTop:20,flexDirection:'column',backgroundColor: '#fff' }}>

             <View style={{ width:'100%',height:40,backgroundColor:'#0086d9',paddingLeft:10 }}>
               <Text style={{ fontWeight:'500',fontSize:20,color:'#ffffff' }}>Join the club now!</Text>           
             </View>

            <View style={{height:350,justifyContent:'center'}}>

              <HomeBottomImages imageUrl={require('../assets/pics/3.jpg')} />
              <HomeBottomImages imageUrl={require('../assets/pics/5.jpg')} />          
              <HomeBottomImages imageUrl={require('../assets/pics/6.jpg')} />         
              <HomeBottomImages imageUrl={require('../assets/pics/7.jpg')} />

            </View>

            </View>
          </View>
       
        </ScrollView>
    )///END return()
  }//END render()
}//END component