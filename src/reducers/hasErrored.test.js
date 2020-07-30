import { hasErrored } from './hasErrored'

describe('hasErrored reducer', () => {
  it('should return the initial state', () => {
    const expected = ''
    const result = hasErrored(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should return a message when an error is present', () => {
    const expected = 'You messed up'
    const result = hasErrored(undefined, {
      type: 'HAS_ERRORED',
      message: 'You messed up'
    })
    expect(result).toEqual(expected)
  })
})