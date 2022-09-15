import React from 'react';
import renderer from 'react-test-renderer';
import OperatorKeys from '../components/operatorkeys'

it('renders NumericKeys correctly', () => {
  const tree = renderer.create(<OperatorKeys />)
  expect(tree).toMatchSnapshot()
});