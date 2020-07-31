export const setFavoritesPage = (state = false, action) => {
  switch (action.type) {
    case 'SET_FAVORITES_PAGE':
      return action.favoritesPage
    default:
      return state
  }
}