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

import Tabs from './Tabs'
import Chats from './Chats'

const { width, height } = Dimensions.get('window')

const Ti = () => <Text>FOO</Text>
const Bar = () => <Text>Bar</Text>
export const Stack = StackNavigator({
  Home: {
    screen: Tabs,
    path: 'tabs/recent',
    navigationOptions: () => ({
      header: null
    })
  },
  Chat: { screen: Chats, path: 'stack/chat/:user' }
}, {
  navigationOptions: ({ screenProps }) => ({
    title: getTitle(screenProps.index)
  })
})

const MainStack = ({ mainStack, tabs, dispatch }) => (
  <Stack
    screenProps={{ index: tabs.index }}
    navigation={addNavigationHelpers({
      navKey: 'mainStack',
      dispatch,
      state: mainStack
    })}
  />
)



const mapStateToProps = ({ mainStack, tabs }) => ({ mainStack, tabs })
export default connect(mapStateToProps)(MainStack)


const getTitle = index => {
  switch (index) {
    case 0:
      return 'RECENT'
    case 1:
      return 'CONTACTS'
    case 2:
      return 'STACKTABS'
    default:
      return 'APP'
  }
}
