import { isLoading, hasErrored, setPlants } from '../actions'
const fetch = require('node-fetch')

export const getPlants = (pageNum) => {
  const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/plants?filter_not%5Bedible_part%5D=null&token=pMAzkzZTgwt3C_hk6kdpRu6zVLfcZzqZpwD9w98Ppb8&page=${pageNum}`
  
  return async (dispatch) =>  {
    try {
      dispatch(isLoading(true))
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      dispatch(setPlants( data.data ))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}