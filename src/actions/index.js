export const setPlants = plants => ({
  type: 'SET_PLANTS',
  plants
})

export const setPlantInfo = plantInfo => ({
  type: 'SET_PLANT_INFO',
  plantInfo
})

export const resetPlantInfo = () => ({
  type: 'RESET_PLANT_INFO'
})

export const setPlantPageId = plantPageId => ({
  type: 'SET_PLANT_PAGE_ID',
  plantPageId
})

export const resetPlantPageId = () => ({
  type: 'RESET_PLANT_PAGE_ID',
})

export const setPlantPage = bool => ({
  type: 'SET_PLANT_PAGE',
  plantPage: bool
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
})