import { createStore, applyMiddleware, compose } from 'redux'
import { NavigationActions } from 'react-navigation'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { connectRoutes, redirect } from 'redux-first-router'
// import reduxNavigation from 'redux-first-router-navigation'
import reduxNavigation from '../../redux-first-router-navigation/src/index.js'
import createReducer from './reducers'
import { Stack } from './components/Stack'
import { Tabs, TabsStack } from './components/Tabs'
import { Drawer, DrawerStack } from './components/Drawer'

export default history => {
  const initialPath = history.entries[0].pathname
  const { reducer, middleware, enhancer } = connectRoutes(history, {
    HOME: { path: '/tabs/recent', navKey: 'home' },
    CONTACTS: { path: '/tabs/contacts', navKey: 'contacts' },
    NOTIFICATIONS: { path: '/tabs/notifications', navKey: 'tabsStack' },
    CHAT: { path: '/tabs/chat/:user', navKey: 'tabsStack' },

    DRAWER_NOTIFICATIONS: { path: '/drawer/notifications', navKey: 'drawerStack' },
    DRAWER_CHAT: { path: '/drawer/chat/:user', navKey: 'drawerStack' },

    STACK_CHAT: { path: '/stack/chat/:user', navKey: 'mainStack' },

    KEMA: '/tabs/recent/kem/:user',
    JAMES: '/tabs/recent/jam/:user'
  }, {
    navigators: reduxNavigation({
      drawer: Drawer,
      drawerStack: DrawerStack,
      tabs: Tabs,
      tabsStack: TabsStack,
      mainStack: Stack
    })
  })

  const middlewares = applyMiddleware(thunk, middleware)
  const reducers = createReducer({ location: reducer }, initialPath)
  const composeEnhancers = __DEV__ ? composeWithDevTools({}) : compose

  const store = createStore(reducers, composeEnhancers(enhancer, middlewares))

  window.HIST = history
  window.Store = store

  return store
}

window.Stack = Stack
