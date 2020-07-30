const initialState = []

export const setPlantInfo = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_PLANT_INFO':
    return [...state, action.plantInfo]
  case 'RESET_ITEM':
    return initialState
  default:
    return state
  }
}