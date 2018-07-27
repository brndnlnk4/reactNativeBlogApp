import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight, 
        TouchableNativeFeedback, AppRegistry, TextInput, Image, ImageBackground,
        KeyboardAvoidingView, ActivityIndicator, Alert, FlatList, ListView, 
        StatusBar, Animated, Platform, Modal } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Container, Header, Content, Button, Icon, ActionSheet, Root,
        List, ListItem, Left, Right, Body, Switch, Accordion, Form, Item,
       Input, Label, Thumbnail, TextArea, Picker, Footer } from 'native-base';
//import { List, ListItem } from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { storeState, retrieveState } from '../components/helpers'
import AsyncStorage from 'AsyncStorage'
import axios from 'axios';

const minHeight = 60,  
      maxHeight = 150

export default class ClickableExapandableListItem extends Component{
  constructor(props){
    super(props)
    
    this.state = {
      modalVisible: false,
      heightAnim: minHeight,
      expandedToggled: false
    }
  }
  
  toggleModal(){
    this.setState({modalVisible: !this.state.modalVisible})
  }
  
  expandTgl(){
      this.setState({
        heightAnim: (this.state.heightAnim === minHeight) ? maxHeight : minHeight,
        expandedToggled: (this.state.expandedToggled) ? false : true
      })
    }//END fn()
  
  render(){
    const { heightAnim } = this.state,
          $flexWrapToggleState = (this.state.expandedToggled) ? 'wrap' : 'nowrap',
          $overflow = (this.state.expandedToggled) ? 'visible' : 'hidden';
    
    return(
      <ListItem avatar style={{ height:heightAnim,borderBottomColor:'rgba(154, 154, 154, 0.28)', borderBottomWidth:2, marginVertical:8}} >
        
        <MessageView 
          {...this.state} 
          senderAvatar={this.props.pic}
          toggleModal={this.toggleModal.bind(this)}
        />
        
         <Left>
           <Button full transparent onPress={() => this.expandTgl()} >
             <Thumbnail source={this.props.pic} round />
           </Button>
         </Left>
         
         <Body style={{ height: this.state.heightAnim }} >

           <Button full transparent onPress={() => this.expandTgl()} style={{marginVertical:-15}} >
             <Text style={{width:'100%',fontSize:16,fontWeight:'600',textAlign:'left'}} >testing header</Text>
           </Button>

           <Button full light onPress={(e) => this.expandTgl(e)} style={{ height:this.state.heightAnim, alignItems:'flex-start', justifyContent:'flex-start' }} >
              <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet vitae maxime obcaecati est dicta officiis.
             </Text>
           </Button>
           
         </Body>
         
         <Right>
           <Button full transparent onPress={this.toggleModal.bind(this)}>
             <Icon type="FontAwesome" name="window-maximize" />
           </Button>
         </Right>
         
      </ListItem>
    )///END return
  }///END render()
}


class MessageView extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {
      newMessage: ''
    }
  }
  
  render(){
    return(
        <Modal 
         transparent={false} 
         animationType="slide" 
         visible={this.props.modalVisible} 
         onRequestClose={() => console.log('____modal event change____')}
       >
          
          <Content>

           <KeyboardAvoidingView>      
                  
            <View style={{flexDirection:'row',height:50}} >
              <View style={{flex:3,alignSelf:'center'}}>
                <Icon type='FontAwesome' name='user'>Messages</Icon>
              </View>
              <Right style={{flex:1}}>
                <Button transparent onPress={this.props.toggleModal}><Icon type='Entypo' name='cross' /></Button>
              </Right>
            </View>
            
            <View style={{flex:3}} >
              <List>
                <ListItem header><Text>Messages</Text></ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={this.props.senderAvatar}></Thumbnail>
                  </Left>
                  <Body>
                    <Text>text goes in here blabalbalblalbalbalbla</Text>
                  </Body>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={this.props.senderAvatar}></Thumbnail>
                  </Left>
                  <Body>
                    <Text>text goes in here blabalbalblalbalbalbla</Text>
                  </Body>
                </ListItem>
                <ListItem thumbnail>
                  <Left>
                    <Thumbnail source={this.props.senderAvatar}></Thumbnail>
                  </Left>
                  <Body>
                    <Text>text goes in here blabalbalblalbalbalbla</Text>
                  </Body>
                </ListItem>
              </List>
            </View>
           </KeyboardAvoidingView>
            
            
            <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}} >
              <View style={{flex:4}} >
               <Input size="lg" onChangeText={({value}) => this.setState({newMessage:value})} />
              </View>
              <View style={{flex:1}} >
                <Button transparent block>
                  <Icon type="FontAwesome" name="send"></Icon>
                </Button>
              </View>
            </View>
            
          </Content>
          
        </Modal>
    )
  }
}