import { getPlantInfo } from '../getPlantInfo'

import { isLoading, hasErrored, setPlants } from '../../actions'

describe('getPlants', () => {
  let mockID
  let mockPlantInfo
  let mockDispatch

  beforeEach(() => {
    mockID = 111174
    mockPlantInfo = [{
      "id": 111174,
      "common_name": "lawndaisy",
      "slug": "bellis-perennis",
      "scientific_name": "Bellis perennis",
      "year": 1753,
      "bibliography": "Sp. Pl.: 886 (1753)",
      "author": "L.",
      "status": "accepted",
      "rank": "species",
      "family_common_name": "Aster family",
      "genus_id": 780,
      "observations": "Madeira, Europe to Medit. and C. Asia",
      "image_url": "https://bs.floristic.org/image/o/43061c6c2cb49908503eac2eaec0ddab69958e17",
      "genus": "Bellis",
      "family": "Asteraceae",
      "duration": null 
    }]

    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        plants: mockPlantInfo
      }) 
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getPlantInfo(mockID) // this is the inner function that is returned
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  // it('calls fetch with the correct param', () => {
  //   const thunk = getPlantInfo(mockID)

  //   thunk(mockDispatch)

  //   expect(window.fetch).toHaveBeenCalledWith(mockID)
  // })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Header required'
    }))
    
    const thunk = getPlantInfo(mockID) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Header required'))
  })

  // it('should dispatch isLoading(false) if the response is ok', async () => {
  //   const thunk = getPlantInfo(mockID) 
  //   await thunk(mockDispatch)
    
  //   expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  // })
})