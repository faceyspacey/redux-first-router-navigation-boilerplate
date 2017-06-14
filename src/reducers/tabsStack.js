import { TabsStack } from '../components/Tabs'

export default (state, action) =>
  TabsStack.router.getStateForAction(action, state) || state

