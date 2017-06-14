import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  ScrollView,
  Dimensions
} from 'react-native'
import {
  StackNavigator,
  DrawerNavigator,
  addNavigationHelpers
} from 'react-navigation'

import MainStack from './Stack'
import Notifications from './Notifications'
import Chats from './Chats'

const { width, height } = Dimensions.get('window')

export const DrawerStack = StackNavigator({
  Notifications: { screen: Notifications, path: 'drawer/notifications' },
  Chat: { screen: Chats, path: 'drawer/chat/:user' }
})

let Stack = ({ drawerStack, dispatch, close }) =>
  <DrawerStack
    screenProps={{ close }}
    navigation={addNavigationHelpers({
      navKey: 'drawerStack',
      dispatch,
      state: drawerStack
    })}
  />


Stack = connect(({ drawerStack }) => ({ drawerStack }))(Stack)

export const Drawer = DrawerNavigator({
  Tabs: { screen: MainStack }
}, {
  // closePath: 'app',
  // openPath: 'drawer',
  drawerPosition: 'left',
  drawerWidth: width * 0.9,
  contentComponent: props => (
    <ScrollView style={{ backgroundColor: 'black' }}>
      <View style={{ height, backgroundColor: 'blue' }}>
        <Stack
          close={() => props.navigation.navigate('DrawerClose')}
        />
      </View>
    </ScrollView>
  )
})


const AppDrawer = ({ drawer, dispatch }) =>
  <Drawer
    navigation={addNavigationHelpers({
      navKey: 'drawer',
      dispatch,
      state: drawer
    })}
  />

const mapStateToProps = ({ drawer }) => ({ drawer })
export default connect(mapStateToProps)(AppDrawer)

