const initialState = false;

export const setPlantPage = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_PLANT_PAGE':
    return action.plantPage
  case 'RESET_PLANT_PAGE': 
    return initialState
  default:
    return state
  }
}