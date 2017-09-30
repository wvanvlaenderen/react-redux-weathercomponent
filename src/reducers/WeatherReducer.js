import { GET_WEATHER_DONE } from '../actions/ActionTypes'

const initialState = {
  locations: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_DONE: {
      return {
        ...state,
        locations: [...state.locations, action.payload]
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}
