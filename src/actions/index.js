export const setPlants = plants => ({
  type: 'SET_PLANTS',
  plants
})

export const setPlantInfo = plantInfo => ({
  type: 'SET_PLANT_INFO',
  plantInfo
})

export const setPlantId = plantId => ({
  type: 'SET_PLANT_ID',
  plantId
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
})