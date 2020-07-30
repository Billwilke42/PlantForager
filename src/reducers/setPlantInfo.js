export const setPlantInfo = (state = {}, action) => {
  switch (action.type) {
  case 'SET_PLANTS_INFO':
    return [...state, action.plantInfo]
  default:
    return state
  }
}