import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { connect } from 'react-redux'
import { getWeather } from './actions/WeatherActions'
import WeatherComponent from './components/weatherComponent/WeatherComponent'
import SearchComponent from './components/searchComponent/SearchComponent'

export class App extends Component {

  componentDidMount () {
    this.props.dispatch(getWeather('London'))
    this.props.dispatch(getWeather('New York'))
  }

  render () {
    const {locations} = this.props

    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>

          <SearchComponent
              addLocation={ (location) => this.props.dispatch(getWeather(location))} />

          <div id="weatherCards">
            { locations.map((location, i) => {
              return (
                  <WeatherComponent
                      key={i}
                      weather={{
                        location: location.name,
                        temp: location.main.temp
                      }}
                  />
              )
            })
            }
          </div>
        </div>
    )
  }
}

export default connect((store) => {
  return {
    locations: store.weatherReducer.locations,
  }
})(App)