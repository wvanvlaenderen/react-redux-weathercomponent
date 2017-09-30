import React from 'react'
import './style.css'
import { GET_WEATHER_DONE } from '../../actions/ActionTypes'

export default class SearchComponent extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      location: ''
    };
  }

  updateLocation = (e) => {
    this.setState({
      location: e.target.value
    });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.props.addLocation(this.state.location).then((action) => {
        if (action.type === GET_WEATHER_DONE) {
          this.setState({
            location: ''
          })
        }
      })
    }
  }

  render () {
    return (
        <div id="searchComponent">
          <input
              className="enjoy-css"
              placeholder="Enter location and press enter"
              value={this.state.location}
              onKeyPress={ key => this.handleKeyPress(key)}
              onChange={e => this.updateLocation(e)}
          />
        </div>
    );
  }
}