import { setPlantPageId } from './setPlantPageId'

describe('setPlantInfo reducer', () => {
  it('should return an initial state', () => {
    const expected = false
    const result = setPlantPage(undefined, false)
    expect(result).toEqual(expected) 
  })

  it('should reset state', () => {
    const expected = false
    
    const result = setPlantPageId(undefined, {
      type: "RESET_PLANT_PAGE_ID"
    })

    expect(result).toEqual(expected)
  })
})