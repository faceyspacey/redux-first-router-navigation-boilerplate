import { DrawerStack } from '../components/Drawer'

export default (state, action) =>
  DrawerStack.router.getStateForAction(action, state) || state

