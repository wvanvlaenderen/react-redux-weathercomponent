import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

describe('app container', () => {
  const store = configureMockStore([thunk])({
    weatherReducer: {
      weather: {}
    }
  })

  const dispatchSpy = jest.fn()
  store.dispatch = dispatchSpy

  it('dispatches correct actions upon rendering', () => {
    ReactDOM.render(<App store={store} />, document.createElement('div'))

    let tree = dispatchSpy.mock.calls.toString()
    expect(tree).toMatchSnapshot();
  })


})
