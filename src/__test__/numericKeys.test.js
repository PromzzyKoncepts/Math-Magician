import React from 'react';
import renderer from 'react-test-renderer';
import NumberKeys from '../components/numericKeys'

it('renders NumericKeys correctly', () => {
  const tree = renderer.create(<NumberKeys />)
  expect(tree).toMatchSnapshot()
});