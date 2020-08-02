export const isLoading = (state = false, action) => {
  switch(action.type) {
    case 'IS_LOADING':
      return action.isLoading
    default:
      return state
  }
}

export const hasErrored = (state = '', action) => {
  switch(action.type) {
    case 'HAS_ERRORED':
      return action.message
    default:
      return state
  }
}

const initialState = []

export const setPlantsFromLocation = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_PLANTS_FROM_LOCATION':
    return [...this.state, action.plantsFromLocation]
  case 'RESET_PLANTS_FROM_LOCATION':
    return initialState
  default:
    return state
  }
}