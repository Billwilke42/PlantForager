import { setPlantInfo } from './setPlantInfo'

describe('setPlantInfo reducer', () => {
  it('should return an initial state', () => {
    const expected = {}
    const result = setPlantInfo(undefined, {})
    expect(result).toEqual(expected) 
  })

  it('should reset state', () => {
    const expected = {}
    
    const result = setPlantInfo(undefined, {
      type: "RESET_PLANT_INFO"
    })

    expect(result).toEqual(expected)
  })
})