import { isLoading } from './isLoading'

describe('isLoading reducer', () => {
  it('should return an initial state', () => {
    const expected = false
    const result = isLoading(undefined, {})
    expect(result).toEqual(expected)  
  })

  it('should change the state', () => {
    const expected = true
    const result = isLoading(undefined, {
      type: 'IS_LOADING',
      isLoading: true
    })
    expect(result).toEqual(expected)
  })
})