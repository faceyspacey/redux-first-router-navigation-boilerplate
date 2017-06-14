// @flow
// import { Linking } from 'react-native'
import { push } from 'redux-first-router'
import startApp from './src'

// yup this works!! (I keep it off while working and just pre-set the URL)

// Linking.getInitialURL().then(startApp)
// Linking.addEventListener('url', ({ url }) => push(url))

// startApp('spiritapp://')
startApp('spiritapp://tabs/recent')

console.disableYellowBox = true
