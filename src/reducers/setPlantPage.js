export const setPlantPage = (state = false, action) => {
  switch (action.type) {
  case 'SET_PLANT_PAGE':
    return [...state, action.plantPage]
  default:
    return state
  }
}