export const setPlants = (state = [], action) => {
  switch (action.type) {
  case 'SET_PLANTS':
    return [...state, action.plants]
  default:
    return state
  }
}