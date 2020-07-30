const initialState = ''

export const hasErrored = (state = initialState, action) => {
  switch (action.type) {
  case 'HAS_ERRORED':
    return action.message
  default: 
    return state
  }
}