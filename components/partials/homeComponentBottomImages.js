import React, { Component } from 'react'
import { Container, Text, View, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from 'AsyncStorage'
import $styles from '../../assets/styles'

import { getCurrentRouteName, getCurrentRouteParams } from '../helpers'

export default class HomeComponentBottomImages extends Component{
  /*
  * required: this.props.imageUrl
  */
  render(){
    return(
        <View style={{flex:1,paddingHorizontal:15}}>
          <Image 
            resizeMode='cover'
            source={this.props.imageUrl} 
            style={{flex:1,width:'100%',height:null}}
          />
        </View>
    )
  }
}