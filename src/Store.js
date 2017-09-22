import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { applyMiddleware, createStore } from 'redux'
import reducer from './reducers'

let middleware = applyMiddleware(promise(), thunk)

if (process.env.NODE_ENV === 'development') {
  middleware = applyMiddleware(promise(), thunk, createLogger())
}

export default createStore(reducer, middleware)
