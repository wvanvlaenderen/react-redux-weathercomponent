import { GET_WEATHER_DONE } from '../actions/ActionTypes'

const initialState = {
  weather: undefined
}


export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_DONE: {
      return {
        ...state,
        weather: action.payload
      }
    }

    default: {
      return {
        ...state
      }
    }
  }
}
