export const setPlantPage = (state = false, action) => {
  switch (action.type) {
  case 'SET_PLANT_PAGE':
    return action.plantPage
  default:
    return state
  }
}