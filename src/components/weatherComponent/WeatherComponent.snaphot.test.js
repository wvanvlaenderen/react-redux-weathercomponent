import React from 'react'
import renderer from 'react-test-renderer'
import WeatherComponent from './WeatherComponent'

test('Renders temperature in kelvin to celcius using snaphot testing', () => {
  const component = renderer.create(
      <WeatherComponent
          weather={{
            location: 'london',
            temp: 300,
          }}
      />
  )

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})