import { setFavoritesPage } from './setFavoritesPage'

it('should return an initial state', () => {
  const expected = false
  const result = setFavoritesPage(undefined, false)
  expect(result).toEqual(expected) 
})

it('should reset state', () => {
  const expected = false
  
  const result = setFavoritesPage(undefined, {
    type: "RESET_FAVORITES_PAGE"
  })

  expect(result).toEqual(expected)
})
