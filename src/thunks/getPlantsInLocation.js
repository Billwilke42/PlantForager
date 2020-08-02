import { isLoading, hasErrored, setPlantsFromLocation } from '../actions'
const fetch = require('node-fetch')

export const getPlantsInLocation = (locationZone) => {
  // const url = `https://trefle.io/api/v1/distributions/${locationZone}/plants?token=pMAzkzZTgwt3C_hk6kdpRu6zVLfcZzqZpwD9w98Ppb8&filter_not[edible_part]`
  debugger
  const url = `https://cors-anywhere.herokuapp.com/https://trefle.io/api/v1/distributions/${locationZone}/plants?token=pMAzkzZTgwt3C_hk6kdpRu6zVLfcZzqZpwD9w98Ppb8&filter_not[edible_part]`
  return async (dispatch) =>  {
    try {
      // dispatch(isLoading(true))
      // const response = await fetch('https://fe-cors-proxy.herokuapp.com', {
      //   headers: {
      //     "Target-URL": url
      //   }
        dispatch(isLoading(true))
        const response = await fetch(url)
      // })
      if (!response.ok) {
        throw Error(response.statusText)
      }
      const data = await response.json()
      dispatch(isLoading(false))
      console.log(data)
      dispatch(setPlantsFromLocation( data.data ))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}