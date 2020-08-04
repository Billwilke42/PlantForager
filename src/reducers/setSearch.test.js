import { setSearch } from './setSearch'

describe('setSearch reducer', () => {
  it('should return an initial state', () => {
    const expected = ''
    const result = setSearch(undefined, '')
    expect(result).toEqual(expected) 
  })

  it('set the search', () => {
    const expected  = 'flower'
    const result = setSearch(undefined, {
      type: "SET_SEARCH",
      search: 'flower'

    })
  })

  it('should reset state', () => {
    const expected = ''
    
    const result = setSearch(undefined, {
      type: "RESET_SEARCH"
    })

    expect(result).toEqual(expected)
  })
})