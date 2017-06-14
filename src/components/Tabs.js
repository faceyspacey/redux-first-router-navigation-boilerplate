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
  TabNavigator,
  DrawerNavigator,
  TabBarTop,
  NavigationActions,
  addNavigationHelpers
} from 'react-navigation'

import RecentChats from './RecentChats'
import AllContacts from './AllContacts'
import Chats from './Chats'
import Notifications from './Notifications'


const { width, height } = Dimensions.get('window')



export const TabsStack = StackNavigator({
  Notifications: { screen: Notifications, path: 'tabs/notifications', navigationOptions: { title: 'Notifications' } },
  Chat: { screen: Chats, path: 'tabs/chat/:user' }
}, {
  cardStyle: {
    backgroundColor: 'transparent'
  }
})

let Stack = ({ tabsStack, dispatch }) => (
  <TabsStack
    navigation={addNavigationHelpers({
      navKey: 'tabsStack',
      dispatch,
      state: tabsStack
    })}
  />
)


Stack = connect(({ tabsStack }) => ({ tabsStack }))(Stack)

Stack.navigationOptions = ({ screenProps }) => {
  return {
    tabBarVisible: screenProps.tabsStack.index > 0 ? true : true
  }
}



export const Tabs = TabNavigator({
  Recent: { screen: RecentChats },
  All: { screen: AllContacts },
  StackTabs: { screen: Stack }
}, {
  // initialRouteName: 'SubTabs',
  animationEnabled: true,
  swipeEnabled: true,
  backBehavior: 'none',
  // lazy: true,
  navigationOptions: (options) => {
    return {
      tabBarVisible: true,
      cardStyle: {
        backgroundColor: 'pink'
      }
    }
  },
  tabBarComponent: TabBarTop,
  tabBarPosition: 'bottom',
  style: {
    backgroundColor: 'black'
  },
  tabBarOptions: {
    activeTintColor: 'blue',
    inactiveTintColor: 'white',
    indicatorStyle: {
      backgroundColor: 'blue'
    },
    tabStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    },
    style: {
      backgroundColor: '#2196f3'
    }
  }
})

const AppTabs = ({ tabs, tabsStack, dispatch }) => (
  <View id='FOOBAR' style={{ backgroundColor: '#2196f3' }}>
    <View style={{ position: 'absolute', height, width, justifyContent: 'center', alignItems: 'center' }}>
      <Image source={require('../images/logo.png')} style={{ width: 200, height: 200, opacity: .5 }} />
    </View>

    <ScrollView style={{ }}>
      <Tabs
        screenProps={{ tabsStack, index: tabs.index }}
        navigation={addNavigationHelpers({
          navKey: 'tabs',
          dispatch,
          state: tabs
        })}
      />
    </ScrollView>
  </View>
)


const mapStateToProps = ({ tabs, tabsStack }) => ({ tabs, tabsStack })
const MainTabs = connect(mapStateToProps)(AppTabs)


MainTabs.navigationOptions = ({ navigation }) => ({
  headerLeft: (
    <Button
      title='DRAWER'
      onPress={() => navigation.dispatch({ type: 'DRAWER_NOTIFICATIONS' })}
    />
  )
})

export default MainTabs

