import { Drawer } from '../components/Drawer'


// state only needs to be set once as the initial state,
// since after all we use drawer state for is changing the index
export default path => {
  const initialState = Drawer.router.getStateForAction({})

  if (path.indexOf('/drawer') === 0) {
    console.log('PATH', path)
    initialState.index = 1
  }

  return (prev = initialState, action) => {
    let index

    switch (action.navKey) {
      // actions for Drawer StackNavigator requires an open Drawer (with index 1)
      // case 'DRAWER_NOTIFICATIONS':
      // case 'DRAWER_CHAT':
      case 'drawerStack':
        index = 1
        break
      case 'tabsStack':
      case 'tabs':
      case 'mainStack':
      case 'home':
      case 'contacts':
        index = 0
        break
      // actions for the rest of the app require a closed Drawer (with index 0)
      default:
        const state = Drawer.router.getStateForAction(action, prev) || prev
        index = state.index
    }

    return prev.index === index ? prev : { ...prev, index }
  }
}
