import { Tabs } from '../components/Tabs'

window.TABS = Tabs
// const firstAction = Tabs.router.getActionForPathAndParams('tabs/recent')
const initialState = Tabs.router.getStateForAction({})

export default (prev = initialState, action) => {
  let index

  // if (action.meta && action.meta.location && action.meta.location.kind === 'reset') {
  //   return prev
  // }

  if (action.stealth) {
    return prev
  }

  switch (action.navKey) {
    // case 'HOME':
    //   index = 0
    //   break
    // case 'CONTACTS':
    //   index = 1
    //   break
    // case 'NOTIFICATIONS':
    // case 'CHAT':
    //   index = 2
    //   break
    case 'home':
      index = 0
      break
    case 'contacts':
      index = 1
      break
    case 'tabsStack':
      index = 2
      break
    default:
      return Tabs.router.getStateForAction(action, prev) || prev
  }

  return prev.index === index ? prev : { ...prev, index }
}
