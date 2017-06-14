export default (state = 'home', action) => {
  switch (action.type) {
    case 'KEMA':
      return 'KEMA'
    case 'JAMES':
      return 'JAMES'
    default:
      return state
  }
}
