import { isLoading, hasErrored, setPlantInfo } from '../actions'
const fetch = require('node-fetch')

export const getPlantInfo = (id) => {
  const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/species/${id}?&token=pMAzkzZTgwt3C_hk6kdpRu6zVLfcZzqZpwD9w98Ppb8`
  return async (dispatch) =>  {
    dispatch(isLoading(true))
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
  
      dispatch(setPlantInfo( data.data ))
      dispatch(isLoading(false))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}