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