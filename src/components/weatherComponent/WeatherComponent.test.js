import React from 'react';
import {shallow} from 'enzyme';
import WeatherComponent from './WeatherComponent';

test('Renders temperature in kelvin to celcius using snaphot testing', () => {
  const component = shallow(
      <WeatherComponent
          weather={{
            location: 'London',
            temp: 300,
          }}
      />
  )

  expect(component.find('#location').text()).toEqual('London');
  expect(component.find('#temp').text()).toEqual('27º');
})