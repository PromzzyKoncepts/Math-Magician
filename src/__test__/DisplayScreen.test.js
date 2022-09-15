import React from 'react';
import renderer from 'react-test-renderer';
import DisplayScreen from '../components/displayScreen'

it('renders DisplayScreen correctly', () => {
  const tree = renderer.create(<DisplayScreen />)
  expect(tree).toMatchSnapshot()
});