import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, TouchableHighlight, 
        TouchableNativeFeedback, AppRegistry, TextInput, Image, ImageBackground,
        KeyboardAvoidingView, ActivityIndicator, Alert, FlatList, ListView, 
        StatusBar, Animated, Platform } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import { Container, Header, Content, Button, Icon, ActionSheet, Root,
        List, ListItem, Left, Right, Body, Switch, Accordion, Form, Item,
       Input, Label, Thumbnail, TextArea, Picker } from 'native-base';
//import { List, ListItem } from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation';
import { storeState, retrieveState } from '../components/helpers'
import AsyncStorage from 'AsyncStorage'
import axios from 'axios';
import _ from 'lodash';

import ClickableExpandableListItem from '../components/ClickableExpandableListItem'

/*  drawer screen switching functions
this.props.navigation.openDrawer();
this.props.navigation.closeDrawer();
this.props.navigation.toggleDrawer();
*/


const TopContextualStatusBar = (props) => (
  <View style={{flexDirection:'row',height:40,width:'100%',backgroundColor:'#1176ff'}} >
    <Header style={{flex:1}} >
      <Text>Status Bar Options Here</Text>
    </Header>
      {props.children}
  </View>
) 

class MessageFolders extends Component{
  
  constructor(props){
    super(props)
  }
  
  InboxFoldersToSelectFrom(props){
    
    return(
      <ListItem icon style={{borderWidth:1,borderColor:'rgba(41, 62, 118, 0.59)',borderLeftColor:'transparent',borderBottomRightRadius:7,borderTopRightRadius:7,padding:5,backgroundColor:props.bgColor,marginLeft:0,marginRight:5, marginVertical:4}} >
       
        <Left>
          <Button light transparent onPress={() => this.props.navigation.navigate('MessagesList')} >
            <Icon name={props.iconName} type='FontAwesome' style={{fontSize:25,color:'#293e76'}} />
          </Button>
        </Left>
        
        <Body>
          <Button light transparent onPress={() => this.props.navigation.navigate('MessagesList')} >
            <Text style={{fontSize:20, fontWeight:'400',color:'#293e76'}} >{props.title}</Text>
          </Button>
        </Body>
        
      </ListItem>
    )
  }
  
  render(){

    const InboxFoldersToSelectFrom = props => this.InboxFoldersToSelectFrom(props)
    
    return(
      <Container style={{flex:1, width:'90%', borderRightWidth:1}}>
       
        <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#7f89ff' }} >
          <Icon name="android" type="FontAwesome" style={{fontSize:55,color:'#555'}} />
        </View>
        
        <View style={{ flex:3,width:'100%',alignItems:'center', justifyContent:'center' }} >
         <Content style={{width:'100%'}} >
          <List>
            <ListItem itemHeader>
              <Icon type='FontAwesome' name='inbox' style={{fontWeight:'600',fontSize:24}} >Your Inbox</Icon>
            </ListItem>
            
            <InboxFoldersToSelectFrom 
              bgColor='rgba(3, 71, 255, 0.26)'
              title='Unread Messages' 
              iconName='folder'
              {...this.props} 
            />
            <InboxFoldersToSelectFrom 
              bgColor='rgba(119, 245, 202, 0.26)'
              title='Trash Messages' 
              iconName='trash'
              {...this.props} 
            />
            <InboxFoldersToSelectFrom 
              bgColor='rgba(148, 160, 255, 0.26)'
              title='Saved Messages' 
              iconName='star-o'
              {...this.props} 
            />
            <InboxFoldersToSelectFrom 
              bgColor='rgba(225, 142, 255, 0.26)'
              title='Recent Messages' 
              iconName='bookmark'
              {...this.props} 
            />
            <InboxFoldersToSelectFrom 
              bgColor='rgba(233, 245, 87, 0.26)'
              title='Flagged Messages' 
              iconName='flag'
              {...this.props} 
            />

          </List>
         </Content>
        </View>
      </Container>
    )//END return()
  }///END render
}

class MessagesList extends Component{
  
  constructor(props){
    super(props)
    
    this.state = {
      MsgBtnClicked: '',
      pickerSelection: 'key0'
    }
    this.BUTTONS = [
      { text: "View", icon: "eye", iconColor: "#2c8ef4" },
      { text: "Delete", icon: "trash", iconColor: "#fa213b" },
      { text: "Cancel", icon: "close", iconColor: "#25de5b" }
    ]    
  }

  viewSelectedMessage(){
    const {MsgBtnClicked} = this.state
    
    return (MsgBtnClicked && _.trim(MsgBtnClicked.text).toLowerCase() === 'view') ? (
      <Content padder>
        <View style={{ flex:1,borderTopWidth:1,justifyContent:'center',alignItems:'center',marginTop:20 }} >
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur unde ratione, odit quibusdam doloribus nobis, similique optio laudantium pariatur expedita?
          </Text>
        </View>
      </Content>
    ) : (
      <Content padder>
        <View style={{ flex:1,justifyContent:'center',alignItems:'center',marginTop:20 }} >
          <Text style={{ fontSize:20,fontWeight:'800' }} >
            Button clicked: {this.state.MsgBtnClicked.text || 'Nothing clicked'}
          </Text>
        </View>
      </Content>
    )
  }
  
  pickerSelectionView(){
    const _onPickerSelectionChange = (pickerSelection:String) => {
      this.setState({
        pickerSelection
      }, () => console.log("picker selection changed: ",pickerSelection))
    }
    
    return(
      <Content>
        <Form>
          <Picker
            note
            mode="dropdown"
            style={{ width: 120 }}
            onValueChange={_onPickerSelectionChange}
            selectedValue={this.state.pickerSelection}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Form>  
     </Content>
    )//END return
  }
  
  ActionSheetHandler(props){
    return (
      <Button onPress={() => 
        ActionSheet.show(
                {
                  options: this.BUTTONS,
                  cancelButtonIndex: 2,
                  destructiveButtonIndex: 1,
                  title: null
                },
                buttonIndex => {
                  this.setState({
                    MsgBtnClicked: this.BUTTONS[buttonIndex] 
                  }, () => {storeState({'actionSheetBtnClicked':this.state.MsgBtnClicked})})
                })
              } transparent info>
              
        <Icon type="FontAwesome" name="chevron-down" />
      </Button>      
    )///END return
  }
  
  tglShowMoreForListItem(){
    console.log("toggling list item to show more, event: ")
  }
  
  render(){
    const ViewMessageOnSelect = () => this.viewSelectedMessage(),
          PickerSelectionView = () => this.pickerSelectionView()
      
    return(
      <View style={{flex:1}}>
               
        <ScrollView containerStyle={{ flex:1,marginTop:20 }}>
          <Container style={{flex:1,paddingTop:10}}>
            <Content>
             <ScrollView style={{ borderWidth:1, borderColor:'#272727',padding:3 }} >
              <List>
                <ListItem itemHeader>
                  <Text style={{flex:1,fontWeight:'800',fontSize:20}} >Message Folders</Text>
                </ListItem>

                <ClickableExpandableListItem pic={require('../assets/pics/5.jpg')} />
                <ClickableExpandableListItem pic={require('../assets/pics/3.jpg')} />
                <ClickableExpandableListItem pic={require('../assets/pics/5.jpg')} />
                <ClickableExpandableListItem pic={require('../assets/pics/1.jpg')} />
                <ClickableExpandableListItem pic={require('../assets/pics/3.jpg')} />
                <ClickableExpandableListItem pic={require('../assets/pics/1.jpg')} />
                
                <ListItem divider></ListItem>
                
                <ListItem thumbnail>
                    <Left>
                      <Thumbnail source={require('../assets/pics/5.jpg')} round />
                    </Left>
                    <Body style={{borderColor:'transparent'}}>
                      <Text style={{flex:1,borderColor:'transparent'}} >Lorem ipsum dolor sit amet.</Text>
                    </Body>
                    <Right style={{borderColor:'transparent'}} >
                      {/*this.ActionSheetHandler()*/}
                      {PickerSelectionView()}
                    </Right>
                </ListItem>

              </List>  
             </ScrollView>
             
             <View >
              
               <ViewMessageOnSelect />
               <PickerSelectionView />
               
             </View>             
            </Content>
             {/* accordion */
              /*
            <Content>
              <Accordion
                 dataArray={dataArray} 
                 icon='ios-boat'
                 expandedIcon="ios-boat" 
               />
            </Content>
             */}
          </Container>
        </ScrollView>
        
      </View>
    )///END return()
  }//END render()
}//END component

export default createMaterialTopTabNavigator({
  MessagesList: {
    screen: (props) => (<MessagesList {...props} />),
    navigationOptions: {
      tabBarLabel: ({activeTintColor}) => (<Icon name='envelope' type='FontAwesome' style={{ color:'#fff'}} />),
//      tabBarIcon: ({activeTintColor}) => (<Icon name='envelope' type='FontAwesome' style={{ color:activeTintColor}} />)
    }
  },
  MessageFolders: {
    screen: (props) => (<MessageFolders {...props} />),
    navigationOptions: {
      tabBarLabel: ({activeTintColor}) => (<Icon name='list' type='FontAwesome' style={{ color:'#fff'}} />),
    }
  }
},{
  header: false,
  showIcon: false,
  showTabBarLabel: false,
  activeTintColor: '#fff',
  inactiveTintColor: '#c3ddf4',
  initialRouteName: 'MessagesList',
  order: [ 'MessageFolders', 'MessagesList',]
})