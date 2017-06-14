import { NavigationActions } from 'react-navigation'
import Stack from '../components/Stack'
import Tabs from '../components/Tabs'
import Drawer from '../components/Drawer'
import routesMap from '../configureStore/routesMap'

const firstActionTabs = Tabs.router.getActionForPathAndParams('Feed')
const initialTabBarState = Tabs.router.getStateForAction(firstActionTabs)

const tabsReducer = (prev = initialTabBarState, action) => {
  let index

  switch (action.type) {
    case routesMap.NOTIFICATIONS:
    case routesMap.CHIAO:
    case routesMap.BLABLA:
    case routesMap.BAZ:
      index = 0
      break
    case routesMap.BAR:
    case routesMap.FOO:
    case routesMap.CHAT:
      index = 1
      break
    default:
      return Tabs.router.getStateForAction(action, prev) || prev
  }

  return prev.index === index ? prev : { ...prev, index }
}


const firstActionStack = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Notifications' }),
    NavigationActions.navigate({ routeName: 'Chat', params: { user: 'abc' } })
  ]
})

const initialStackState = Stack.router.getStateForAction(firstActionStack)

const stackReducer = (prev = initialStackState, action) => {
  let newAction

  switch (action.type) {
    case routesMap.LOGIN:
      newAction = NavigationActions.back()
      return Stack.router.getStateForAction(newAction)
    case routesMap.ACCOUNT_COMPLETE:
      newAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Settings' })
        ]
      })
      return Stack.router.getStateForAction(newAction)
    default:
      return Stack.router.getStateForAction(action, prev) || prev
  }
}


// state only needs to be set once as the initial state,
// since after all we use drawer state for is changing the index
const drawerReducer = (prev = Drawer.router.getStateForAction({}), action) => {
  let index

  switch (action.type) {
    // actions for Drawer StackNavigator requires an open Drawer (with index 1)
    case routesMap.BAR:
    case routesMap.FOO:
    case routesMap.CHAT:
      index = 1
      break
    // actions for the rest of the app require a closed Drawer (with index 0)
    default:
      index = 0
  }

  return prev.index === index ? prev : { ...prev, index }
}


const drawerStandardReducer = (prev, action) =>
  Drawer.router.getStateForAction(action, prev) || prev
