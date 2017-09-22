import reducer from './WeatherReducer'
import * as types from '../actions/ActionTypes'

describe('weather reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      weather: undefined
    })
  })

  it('should handle GET_WEATHER_DONE', () => {
    expect(
        reducer([], {
          type: types.GET_WEATHER_DONE,
          payload: {
            temp: 10
          }
        })
    ).toEqual({
      weather: {
        temp: 10
      }
    })
  })

})