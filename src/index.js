import React from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import createHistory from 'history/createMemoryHistory'
import configureStore from './configureStore'
import App from './components/App'
import config from '../config'

const env = 'development'

export default url => {
  const delimiter = config(env).URI_PREFIX || '://'
  const initialPath = url ? `/${url.split(delimiter)[1]}` : '/'
  const history = createHistory({ initialEntries: [initialPath] })
  const store = configureStore(history)
  const App = createApp(store)

  AppRegistry.registerComponent('ReduxFirstRouterBoilerplateNative', () => App)
}

const createApp = store => () =>
  <Provider store={store}>
    <App />
  </Provider>
