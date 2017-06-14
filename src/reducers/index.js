import { combineReducers } from 'redux'
import drawer from './drawer'
import mainStack from './stack'
import tabs from './tabs'
import drawerStack from './drawerStack'
import tabsStack from './tabsStack'
import scene from './scene'

export default (libraryReducers, pathname) =>
  combineReducers({
    ...libraryReducers,

    drawer: drawer(pathname),
    drawerStack,

    tabs,
    tabsStack,
    mainStack,

    scene
  })
