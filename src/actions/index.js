export const setPlants = plants => ({
  type: 'SET_PLANTS',
  plants
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
})

export const incrementCurrentPage = () => ({
  type: 'INCREMENT_CURRENT_PAGE',
})

export const decrementCurrentPage = () => ({
  type: 'DECREMENT_CURRENT_PAGE',
})

export const resetCurrentPage = () => ({
  type: 'RESET_CURRENT_PAGE'
})