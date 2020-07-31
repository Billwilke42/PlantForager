const initialState = []

export const setFavorites = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_FAVORITES':
    return [...state, action.favorites]
  case 'REMOVE_FAVORITES':
    return state.filter(favorite => favorite !== action.favorites)
  default:
    return state
  }
}