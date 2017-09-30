import React from 'react'
import './style.css'

export default class WeatherComponent extends React.Component {

  kelvinToCelcius (temperature) {
    return Math.round(temperature - 273.15)
  }

  render () {
    const {weather} = this.props

    return (
        <div className="weather-card">
          <div className="weather-icon cloud"></div>
          <h1 id="temp" className="temp">
            {this.kelvinToCelcius(weather.temp)}º
          </h1>
          <br />
          <p id="location">{weather.location}</p>
        </div>
    )
  }
}