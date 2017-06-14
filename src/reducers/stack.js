import { Stack } from '../components/Stack'

export default (state, action) =>
  Stack.router.getStateForAction(action, state) || state


