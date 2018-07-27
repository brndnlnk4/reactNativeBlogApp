import React from 'react'
import { StyleSheet } from 'react-native'

const $preset_styles_padding = {
  loginButtonText: {
    color: '#00505a',
    fontWeight: 'bold',
    fontSize: 17,
  },
  flex_full: {
    flex: 1
  },
  flex_full_row: {
    width: '100%',
    flex: 1,
    flexDirection: 'row',
  },
  flex_full_col: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
  },
  flex_row: {
    flexDirection: 'row'
  },
  flex_col: {
    flexDirection: 'column'
  },
  center_items: {
    alignContent: 'center',
    justifyContent: 'center'
  },
  inner_xs: {
    padding: 10
  },
  inner_sm: {
    padding: 15
  },
  inner_md: {
    padding: 25
  },
  inner_lg: {
    padding: 35
  },
  
}///END preset

const $preset_styles_border = {
  has_border_radius: {
    borderRadius: 5
  },
  has_border: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333'
  },
  
}///END preset

export default StyleSheet.create({
  loginWrapper: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#49abe8'
  },
  loginSectionTitle: {
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#fff',
  },
  inputElements: {
    backgroundColor: '#fff',
    borderColor: '#527aff',
    marginBottom: 25,
    borderRadius: 10,
    borderWidth: 2,
    fontSize: 20,
    padding: 20,
    width: '90%'
  },
  loginButton: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9cbeff',
    borderRadius: 10,
    padding: 20,
    borderWidth: 3,
    borderColor: '#ddf1ff'
  },
    ordersInnerText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20
    },
    boxesInnerText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20
    },
    accountInnerText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 20
    },
    bottomContentWrapper: {
      flex: 1,
      marginTop: 10,
      height: '100%',
      backgroundColor: '#0070b5'
    },
  
  ...$preset_styles_padding,
  
  ...$preset_styles_border,
})///END preset