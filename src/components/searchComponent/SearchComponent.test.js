import React from 'react'
import { shallow } from 'enzyme'
import SearchComponent from './SearchComponent'
import { GET_WEATHER_DONE } from '../../actions/ActionTypes'

describe('SearchComponent', () => {

  let mockAddLocation = jest.fn().mockImplementation(() => {
    return new Promise(
        function (resolve, reject) {
          resolve({type: GET_WEATHER_DONE})
        })
  })

  const component = shallow(
      <SearchComponent
          addLocation={mockAddLocation}
      />
  )

  test('renders with initial state', () => {
    expect(component.find(SearchComponent))
    expect(component.state('location')).toEqual('')
  })

  test('on change state is updated', () => {
    component.setState({location: 'London'});

    const input = component.find('input');
    input.simulate('change', {target: {value: 'Brussels'}})

    expect(component.state('location')).toEqual('Brussels')
  })

  test('on enter keypress updateLocation is called and state is reset', () => {
    component.setState({location: 'London'});

    const input = component.find('input');
    input.simulate('keypress', {key: 'Enter'})

    return Promise.resolve(mockAddLocation).then(() => {
      expect(mockAddLocation).toBeCalledWith('London')
    }).then(() => {
      expect(component.state('location')).toEqual('')
    })
  })

})