import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/calculator';

it('renders Calculator correctly', () => {
  const tree = renderer.create(<Calculator />);
  expect(tree).toMatchSnapshot();
});
