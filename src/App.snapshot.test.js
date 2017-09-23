import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { spy } from 'sinon'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from './actions/WeatherActions'

describe('app container', () => {
  const store = configureMockStore([thunk])({
    weatherReducer: {
      weather: {}
    }
  })

  const dispatchSpy = spy(store, 'dispatch')

  actions.getWeather = jest.fn().mockImplementation(() => {
    return {type: 'fetching weather'}
  })

  it('dispatches correct actions upon rendering', () => {
    ReactDOM.render(<App store={store} />, document.createElement('div'))

    expect(dispatchSpy.getCalls()).toMatchSnapshot();
  })

})
