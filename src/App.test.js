import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions/WeatherActions'
import { spy } from 'sinon'

describe('app container', () => {
  const store = configureMockStore([thunk])({
    weatherReducer: {
      locations: []
    }
  })

  const dispatchSpy = spy(store, 'dispatch')

  actions.getWeather = jest.fn().mockImplementation(() => {
    return {type: 'fetching weather'}
  })

  it('dispatches getWeather() action upon rendering', () => {
    ReactDOM.render(<App store={store} />, document.createElement('div'))

    expect(dispatchSpy.firstCall.returnValue.type).toEqual('fetching weather')
  })

})
