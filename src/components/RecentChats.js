// @ flow
import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Dimensions,
  ListView,
  findNodeHandle,
  FlatList,
  BackHandler
} from 'react-native'

import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  TabBarTop,
  NavigationActions
} from 'react-navigation'
import { history, back, canGoBack, prevPath } from 'redux-first-router'
import Scrollable from 'redux-first-router-scroll-container-native'


const { width, height } = Dimensions.get('window')

window.BACK = back
window.RN = require('react-navigation')

const Container = ({ type, user, navigation: { navigate, reset, dispatch } }) => {
  let props

  switch (type) {
    case 'KEMA':
      props = {
        backgroundColor: 'purple',
        scrollKey: 'kema'
      }
      break
    case 'JAMES':
      props = {
        backgroundColor: 'red',
        scrollKey: 'james'
      }
      break
    default:
      props = {
        backgroundColor: '#2196f3',
        scrollKey: 'home'
      }
      break
  }

  return (
    <Scrollable
      style={{ backgroundColor: 'transparent', height: height - 48 }}
      {...props}
    >
      <Text style={{ textAlign: 'center', color: 'white' }}>IM HOME</Text>

      <View style={{ height: 50 }} />

      <Button
        onPress={() => navigate('Chat', { user: 'Lucy!!', navKey: 'mainStack' })}
        title='MAIN STACK CHATChat with Lucy [NAVIGATE]'
        color='black'
      />

      <Button
        onPress={() => dispatch({ type: 'STACK_CHAT', payload: { user: 'James' } })}
        title='MAIN STACK CHAT with Lucy [DISPATCH]'
        color='black'
      />

      <Button
        onPress={() => dispatch({ type: 'DRAWER_CHAT', payload: { user: 'lucy' } })}
        title='DRAWER CHAT with Lucy [DISPATCH]'
        color='black'
      />

      <Button
        onPress={() => dispatch({ type: 'CHAT', payload: { user: 'Kema' } })}
        title='TABS CHAT with Lucy [DISPATCH]'
        color='black'
      />

      <View style={{ height: 100 }} />

      <Button
        onPress={() => reset({
          index: 0,
          stealth: true,
          navKey: 'tabsStack',
          actions: [NavigationActions.navigate({ routeName: 'Notifications' })]
        })}
        title='STEALTH RESET FAR RIGHT TAB STACK'
        color='black'
      />

      <Button
        onPress={() => dispatch({ type: 'JAMES', payload: { user: 'Boogie' } })}
        title='DISPATCH JAMES'
        color='black'
      />

      <Button
        onPress={() => dispatch({ type: 'KEMA', payload: { user: 'KittyKat' } })}
        title='DISPATCH KEMA'
        color='black'
      />

      <View style={{ height: 50 }} />

      <Button
        onPress={() => dispatch({ type: 'DRAWER_NOTIFICATIONS' })}
        title='Open Drawer'
      />


      <View style={{ height: 300 }} />
    </Scrollable>
  )
}


const mapState = ({ location, scene }) => ({
  type: scene, // location.type,
  user: location.payload.user,
})

export default connect(mapState)(Container)

// BackHandler.addEventListener('hardwareBackPress', () => {
//   if (canGoBack()) {
//     back()
//     return true
//   }

//   return false
// })

