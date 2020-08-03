import { getPlants } from '../getPlants'
// jest.mock('../getPlants')
import { isLoading, hasErrored, setPlants } from '../../actions'


describe('getPlants', () => {
  let mockPageNum
  let mockPlants
  let mockDispatch

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
    mockDispatch = jest.fn()
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve({
        data: mockPlants
      }),
      status: 200,
      redirected: false,
      url,
      statusText: 'OK',
      url: `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=pMAzkzZTgwt3C_hk6kdpRu6zVLfcZzqZpwD9w98Ppb8&page=${mockPageNum}` 
    }))
  })

  it('should dispatch hasErrored with a message if the response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'Header Required'
    }))
    
    const thunk = getPlants(3) // again, this is the inner function that is returned
    
    await thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(hasErrored('Header required'))
  })
  

  it('calls dispatch with isLoading(true)', () => {
    const thunk = getPlants(mockPageNum) // this is the inner function that is returned
    
    thunk(mockDispatch)
    
    expect(mockDispatch).toHaveBeenCalledWith(isLoading(true))
  })

  
//  it('calls fetch with the correct param', async () => {
//   //   // jest.mock('../getPlants')
//   //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//   //     ok: true,
//   //     json: () => Promise.resolve({
//   //       data: mockPlants
//   //     }) 
//   //   }))

//   //   // jest.mock('../../reducers/setPlants')
//      const thunk = getPlants(mockPageNum)
// const mockUrl = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=pMAzkzZTgwt3C_hk6kdpRu6zVLfcZzqZpwD9w98Ppb8&page=${mockPageNum}`
//     // mockDispatch = jest.fn().mockImplementation(() => mockPlants)
    
//      thunk(mockDispatch)
     
//   //   // console.log(mockDispatch)
//   //   // console.log(window.fetch.mockImplementation)
//     expect(window.fetch).toHaveBeenCalledWith(mockPageNum)
//   })
})