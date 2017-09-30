import reducer from './WeatherReducer'
import * as types from '../actions/ActionTypes'

describe('weather reducer', () => {

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      locations: []
    })
  })

  it('should handle GET_WEATHER_DONE', () => {
    expect(
        reducer({
          locations: []
        }, {
          type: types.GET_WEATHER_DONE,
          payload: {
            temp: 10
          }
        })
    ).toEqual({
      locations: [
        {
          temp: 10
        }
      ]
    })
  })

  it('adds additional locations upon GET_WEATHER_DONE', () => {
    expect(
        reducer({
          locations: [
            {
              temp: 10
            }
          ]
        }, {
          type: types.GET_WEATHER_DONE,
          payload: {
            temp: 20
          }
        })
    ).toEqual({
      locations: [
        {
          temp: 10
        },
        {
          temp: 20
        }
      ]
    })
  })

})