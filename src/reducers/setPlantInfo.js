const initialState = {}

export const setPlantInfo = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_PLANT_INFO':
    return action.plantInfo
  case 'RESET_PLANT_INFO':
    return initialState
  default:
    return state
  }
}