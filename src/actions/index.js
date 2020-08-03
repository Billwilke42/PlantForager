export const setPlants = plants => ({
  type: 'SET_PLANTS',
  plants
})

export const setPlantsFromLocation = plantsFromLocation => ({
  type: 'SET_PLANTS_FROM_LOCATION',
  plantsFromLocation
})

export const resetPlantsFromLocation = () => ({
  type: 'RESET_PLANTS_FROM_LOCATION',
})

export const setPlantInfo = plantInfo => ({
  type: 'SET_PLANT_INFO',
  plantInfo
})

export const resetPlantInfo = () => ({
  type: 'RESET_PLANT_INFO'
})

export const resetPlantPage = () => ({
  type: 'RESET_PLANT_PAGE',
})

export const setPlantPage = bool => ({
  type: 'SET_PLANT_PAGE',
  plantPage: bool
})

export const setFavoritesPage = bool => ({
  type: 'SET_FAVORITES_PAGE',
  favoritesPage: bool
})

export const setFavorites = favorites => ({
  type: 'SET_FAVORITES',
  favorites
})

export const setSearch = search => ({
  type: 'SET_SEARCH',
  search
})

export const resetSearch = search => ({
  type: 'RESET_SEARCH',
})

export const removeFavorites = favorites => ({
  type: 'REMOVE_FAVORITES',
  favorites
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const isLoading = bool => ({
  type: 'IS_LOADING',
  isLoading: bool
})