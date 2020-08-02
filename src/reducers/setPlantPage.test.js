import { setPlantPage } from './setPlantPage'

describe('setPlantInfo reducer', () => {
  it('should return an initial state', () => {
    const expected = false
    const result = setPlantPage(undefined, false)
    expect(result).toEqual(expected) 
  })

  it('should reset state', () => {
    const expected = false
    
    const result = setPlantPage(undefined, {
      type: "RESET_PLANT_PAGE"
    })

    expect(result).toEqual(expected)
  })
})