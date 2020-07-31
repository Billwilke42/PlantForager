const initialState = 0

export const setPlantPageId = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_PLANT_PAGE_ID':
    return action.plantPageId
  case 'RESET_PLANT_PAGE_ID':
    return initialState
  default:
    return state
  }
}