export const setPlantPageId = (state = false, action) => {
  switch (action.type) {
  case 'SET_PLANT_PAGE_ID':
    return [...state, action.plantPageId]
  default:
    return state
  }
}