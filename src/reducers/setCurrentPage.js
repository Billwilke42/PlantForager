const initialState = 1

export const setCurrentPage = (state = initialState, action) => {
  switch (action.type) {
  case 'INCREMENT_CURRENT_PAGE':
    return state + 1
  case 'DECREMENT_CURRENT_PAGE':
    return state - 1
  case 'RESET_CURRENT_PAGE':
    return initialState
  default:
    return state
  }
}
