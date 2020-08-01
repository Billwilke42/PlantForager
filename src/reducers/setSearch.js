const initialState = ''

export const setSearch = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_SEARCH':
    return action.search
  case 'RESET_SEARCH':
    return initialState
  default:
    return state
  }
}