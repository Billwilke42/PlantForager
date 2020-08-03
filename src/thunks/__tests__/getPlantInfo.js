import { getPlantInfo } from '../getPlantInfo'

import { isLoading, hasErrored, setPlantInfo } from '../../actions'

describe('getPlants', () => {
  let mockId
  let mockPlantInfo
  let mockDispatch
  let mockUrl;

  beforeEach(() => {
    mockId = 111174
    mockPlantInfo = {
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
    }

    mockUrl = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/${mockId}?&token=pMAzkzZTgwt3C_hk6kdpRu6zVLfcZzqZpwD9w98Ppb8`
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockPlantInfo
      }), 
    }))
  })

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getPlantInfo(mockId) // this is the inner function that is returned
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('calls fetch with the correct param', async () => {
    const thunk = getPlantInfo(mockId)

    await thunk(mockDispatch)

    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = getPlantInfo(mockId) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = getPlantInfo(mockId) 
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setStaff with the correct params', async () => {
  
    const thunk = getPlantInfo(mockId)
    
    mockDispatch = jest.fn().mockImplementation(() => mockPlantInfo)
  
    await thunk(mockDispatch)
  
    expect(mockDispatch).toHaveBeenCalledWith(setPlantInfo(mockPlantInfo))
  })
})