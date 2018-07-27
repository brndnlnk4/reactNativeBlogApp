import React, { Component } from 'react'
import { Container, Text, View, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AsyncStorage from 'AsyncStorage'
import $styles from '../../assets/styles'

import { getCurrentRouteName, getCurrentRouteParams } from '../helpers'

export default class HomeComponentTopImages extends Component{

  render(){
    /*
    * required: this.props.title, this.props.imageUrl
    */
    return(
      <View style={$styles.center_items, {flex:1, height:150}}>

        <View style={$styles.flex_row,$styles.center_items,{flex:1,paddingHorizontal:20}}>
          <Text style={{ fontWeight:'600',fontSize:16 }}>
            {this.props.title}
          </Text>
        </View>

        <View style={{ flex:2,height:'100%' }}>

          <Image 
            style={{ flex:1,width:null,height:null,marginHorizontal:10,width:null,height:null }}
            source={this.props.imageUrl}
            resizeMode='cover' 
          />

        </View>
      </View>
    )
  }
}