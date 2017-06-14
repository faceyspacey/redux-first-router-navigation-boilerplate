import React from 'react'
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
  NavigationActions
} from 'react-navigation'

const { width, height } = Dimensions.get('window')

export default class Notifications extends React.Component {
  static navigationOptions = {
    title: 'SIDEBAR'
  }

  render() {
    const { navigate, dispatch } = this.props.navigation

    return (
      <View>
        <Button
          onPress={() => this.props.screenProps.close()}
          title='CLOSE DRAWER (screen props)'
        />

        <Button
          onPress={() => dispatch({ type: 'Navigation/NAVIGATE', routeName: 'DrawerClose', navKey: 'drawer' })}
          title='CLOSE DRAWER Redux!!'
        />

        <Button
          onPress={() => navigate('Chat', { user: 'James' + (+new Date) })}
          title='Chat with James!'
        />

        <Button
          onPress={() => dispatch({ type: 'DRAWER_NOTIFICATIONS' })}
          title='Open Drawer'
        />

        <Button
          onPress={() => dispatch({ type: 'Navigation/BACK', navKey: 'drawer' })}
          // onPress={() => dispatch({ type: 'HOME' })}
          title='DrawerClose'
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})
