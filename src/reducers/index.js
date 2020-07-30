import { combineReducers } from 'redux'
import { isLoading } from './isLoading' 
import { hasErrored } from './hasErrored'
import { setPlants } from './setPlants'

export const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  setPlants
})