import { combineReducers } from 'redux'
import { isLoading } from './isLoading' 
import { hasErrored } from './hasErrored'
import { setPlants } from './setPlants'
import { setPlantInfo } from './setPlantInfo'
import { setPlantPageId } from './setPlantPageId'

export const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  setPlants,
  setPlantInfo,
  setPlantPageId
})