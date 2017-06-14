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

export default class AllContacts extends React.Component {
  static navigationOptions = {
    title: 'Contacts'
  }

  render() {
    return (
      <View>
        <Text>All Contacts</Text>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen', { navKey: 'drawer' })}
          title='OPEN THE DRAWER!!'
        />

        <Button
          onPress={() => this.props.navigation.navigate('Recent')}
          title='BACK TO Recent Chats'
        />
      </View>
    )
  }
}
