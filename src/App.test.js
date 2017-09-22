import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions/WeatherActions'

describe('app container', () => {
  const store = configureMockStore([thunk])({
    weatherReducer: {
      weather: {}
    }
  })

  const dispatchSpy = jest.fn()
  store.dispatch = dispatchSpy

  it('dispatches getWeather() action upon rendering', () => {
    ReactDOM.render(<App store={store} />, document.createElement('div'))

    expect(dispatchSpy.mock.calls[0][0].toString()).toEqual(actions.getWeather().toString())
  })


})
