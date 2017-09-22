import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { getWeather } from './actions/WeatherActions'
import WeatherComponent from './components/weatherComponent/WeatherComponent'
import { get } from 'lodash'

export class App extends Component {

  componentDidMount () {
    this.props.dispatch(getWeather())
  }

  render () {
    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <WeatherComponent
              weather={{
                location: get(this.props.weatherReducer.weather, 'name'),
                temp: get(this.props.weatherReducer.weather, 'main.temp')
              }}
          />
        </div>
    )
  }
}

export default connect((store) => {
  return {
    weatherReducer: store.weatherReducer,
  }
})(App)