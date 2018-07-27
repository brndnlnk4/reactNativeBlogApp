import React from 'react'
import AsyncStorage from 'AsyncStorage'
import { StyleSheet } from 'react-native'

export function getCurrentRouteParams(){
  return this.props.navigation.state.params
}

export function getCurrentRouteName(){
  return this.props.navigation.state.routeName
}

export async function storeState($keyValToStore={$keyValToStore}){
  const $key = _.first(_.keys($keyValToStore))
  /* AsyncStorage methods:
  getItem,setItem,removeItem,mergeItem,clear,getAllKeys,
  flushGetRequests,multiGet,multiSet,multiRemove,multiMerge
  */
  try {
    await AsyncStorage.setItem($key, $keyValToStore[$key]);
  } catch (error) {
    console.log("error: ",error)
  }
}

export async function retrieveState($keyToRetrieve='', _fallbackFn=false){
   try {
     const value = await AsyncStorage.getItem($keyToRetrieve);
     if (value !== null) return value; else throw Error('get item failed')
   } catch (error) {
     // Error retrieving data
   }
  if(_.isFunction(_fallbackFn)) _fallbackFn()
}  