import React from 'react'
import './style.css'

export default class WeatherComponent extends React.Component {

  kelvinToCelcius (temperature) {
    return Math.round(temperature - 273.15)
  }

  render () {
    if (this.props.weather.location && this.props.weather.temp) {
      return (
          <div>
            <div className="weather-card">
              <div className="weather-icon cloud"></div>
              <h1 id="temp" className="temp">
                {this.kelvinToCelcius(this.props.weather.temp)}º
              </h1>
              <br />
              <p id="location">{this.props.weather.location}</p>
            </div>
          </div>
      )
    } else {
      return null
    }
  }
}