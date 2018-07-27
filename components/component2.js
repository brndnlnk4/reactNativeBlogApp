import React, { Component } from 'react'
import { Text, View,Platform, StyleSheet, Button } from 'react-native';

export default class component2 extends Component{
  
  constructor(props){
    super(props)

    this.state = {
      message: 'this is stored in state.message'
    }
  }
  
  btnClicked(){
    console.log("clicked on button")
  }

  render(){
    
    return(
      <View>
      <View style={styles.redBox}>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut provident cum quia maiores numquam, blanditiis. Suscipit quidem nemo, ullam excepturi facilis accusamus fugit, commodi provident. Consequatur suscipit repudiandae, unde iure!
        </Text>
        <Text>
          {this.props.text}          
        </Text>
      </View>
      <View style={styles.orangeBox}>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut provident cum quia maiores numquam, blanditiis. Suscipit quidem nemo, ullam excepturi facilis accusamus fugit, commodi provident. Consequatur suscipit repudiandae, unde iure!
        </Text>
      </View>
      <View>
        <Button title="clickHere" onPress={this.btnClicked}>Click Me</Button>
      </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  redBox: {
    alignItems: 'center',
    backgroundColor: '#ff5656'
  },
  orangeBox: {
    backgroundColor: '#ffd563',
    padding: 10
  }
})