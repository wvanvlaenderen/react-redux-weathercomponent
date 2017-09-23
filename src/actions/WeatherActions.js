import { GET_WEATHER_DONE, GET_WEATHER_ERROR } from './ActionTypes'
import axios from 'axios'

export function getWeather () {
  let endpoint = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=2a345681ddcde393253af927097f5747'

  return (dispatch) => {
    return axios.get(endpoint)
    .then((response) => {
      dispatch({
        type: GET_WEATHER_DONE,
        payload: response.data
      })
    })
    .catch((error) => {
      dispatch({
        type: GET_WEATHER_ERROR,
        payload: error.response.data,
        statuscode: error.response.status
      })
    })
  }
}
