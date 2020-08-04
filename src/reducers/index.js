import { combineReducers } from 'redux'
import { isLoading } from './isLoading' 
import { hasErrored } from './hasErrored'
import { setPlants } from './setPlants'
import { setPlantInfo } from './setPlantInfo'
import { setPlantPageId } from './setPlantPageId'
import { setPlantPage } from './setPlantPage'
import { setFavoritesPage } from './setFavoritesPage'
import { setFavorites } from './setFavorites'
import { setSearch } from './setSearch'


export const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  setPlants,
  setPlantInfo,
  setPlantPageId,
  setPlantPage,
  setFavoritesPage,
  setFavorites,
  setSearch
})