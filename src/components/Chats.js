import React from 'react'
import { View, Text, Button, ScrollView } from 'react-native'

export default class Chats extends React.Component {
  static navigationOptions = props => {
    const { state, setParams } = props.navigation
    const isInfo = state.params.mode === 'info'
    const { user } = state.params

    return {
      title: isInfo ? `${user}'s Contact Info` : `Chat /w ${user}`,
      // header: <View />,
      headerRight: (
        <Button
          title={isInfo ? 'Done' : 'info'}
          onPress={() => setParams({ mode: isInfo ? 'none' : 'info', user: 'kema123' })}
        />
      )
    }
  }

  render() {
    const { dispatch, goBack, navigate, state: { params } } = this.props.navigation

    return (
      <ScrollView>
        <Text>Chat with {params.user}!</Text>
        <Text>mode: {params.mode || 'not set'}</Text>

        <Button
          onPress={() => navigate('Chat', { user: 'James' + (+new Date) })}
          title='Chat with James'
        />

        <Button
          onPress={() => goBack()}
          title='GO BACK'
        />

        <Button
          onPress={() => dispatch({ type: 'Navigation/BACK' })}
          title='BACK Redux!!'
        />

        <View style={{ height: 1000 }} />
      </ScrollView>
    )
  }
}
