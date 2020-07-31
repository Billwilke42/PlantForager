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

export const setPlants = (state = [], action) => {
  switch (action.type) {
  case 'SET_PLANTS':
    return [...state, action.plants]
  default:
    return state
  }
}