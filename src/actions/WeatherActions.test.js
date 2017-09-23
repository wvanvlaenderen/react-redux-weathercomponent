import * as actions from './WeatherActions'
import * as types from './ActionTypes'
import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import httpAdapter from 'axios/lib/adapters/http'
import axios from 'axios'

axios.defaults.host = 'https://api.openweathermap.org';
axios.defaults.adapter = httpAdapter;

const mockStore = configureMockStore([thunk])

describe('actions', () => {

  afterEach(() => {
    nock.cleanAll()
  })

  it('should return the weather', () => {
    const mockedResponse = {
      "coord": {
        "lon": -0.13,
        "lat": 51.51
      },
      "weather": [{
        "id": 310,
        "main": "Drizzle",
        "description": "light intensity drizzle rain",
        "icon": "09d"
      }, {
        "id": 701,
        "main": "Mist",
        "description": "mist",
        "icon": "50d"
      }],
      "base": "stations",
      "main": {
        "temp": 289.92,
        "pressure": 1014,
        "humidity": 59,
        "temp_min": 288.15,
        "temp_max": 292.15
      },
      "visibility": 10000,
      "wind": {
        "speed": 5.7,
        "deg": 210
      },
      "clouds": {
        "all": 75
      },
      "dt": 1506003780,
      "sys": {
        "type": 1,
        "id": 5091,
        "message": 0.0072,
        "country": "GB",
        "sunrise": 1505972773,
        "sunset": 1506016764
      },
      "id": 2643743,
      "name": "London",
      "cod": 200
    }

    nock('https://api.openweathermap.org')
    .get('/data/2.5/weather?q=London&appid=2a345681ddcde393253af927097f5747')
    .reply(200, mockedResponse)

    const store = mockStore({
      weather: undefined
    })

    const expectedActions = [
      {
        type: types.GET_WEATHER_DONE,
        payload: mockedResponse
      }
    ]

    return store.dispatch(actions.getWeather()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('can handle error messages', () => {
    const mockedResponse = {
      status: 401,
      data: {"cod":401, "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."}
    }

    nock('https://api.openweathermap.org')
    .get('/data/2.5/weather?q=London&appid=2a345681ddcde393253af927097f5747')
    .reply(401, mockedResponse)

    const store = mockStore({
      weather: undefined
    })

    const expectedActions = [
      {
        type: types.GET_WEATHER_ERROR,
        payload: mockedResponse,
        statuscode: 401
      }
    ]

    return store.dispatch(actions.getWeather()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

})
