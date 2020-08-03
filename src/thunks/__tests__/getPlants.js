import { getPlants } from '../getPlants'
import { isLoading, hasErrored, setPlants } from '../../actions'


describe('getPlants', () => {
  let mockPageNum
  let mockPlants
  let mockDispatch
  let mockUrl

  beforeEach(() => {
    mockPageNum = '3'
    mockPlants = [{
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
    mockUrl = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=pMAzkzZTgwt3C_hk6kdpRu6zVLfcZzqZpwD9w98Ppb8&page=${mockPageNum}`
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockPlants
      }),
    }))
  })
  it('calls dispatch with isLoading(true)', () => {
    const thunk = getPlants(mockPageNum) // this is the inner function that is returned
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  it('should be called with the get param', async () => {
    
    const thunk = getPlants(mockPageNum) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(window.fetch).toHaveBeenCalledWith(mockUrl)
  })
  

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Something went wrong'
    }))
    
    const thunk = getPlants(mockUrl) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Something went wrong'))
  })

  it('should dispatch isLoading(false) if the response is ok', async () => {
    const thunk = getPlants(mockUrl) // inner function
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(false))
  })

  it('should dispatch setStaff with the correct params', async () => {
  
    const thunk = getPlants(mockPageNum)
    
    mockDispatch = jest.fn().mockImplementation(() => mockPlants)
  
    await thunk(mockDispatch)
  
    expect(mockDispatch).toHaveBeenCalledWith(setPlants(mockPlants))
  })
})