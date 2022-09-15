import { screen, fireEvent, render } from '@testing-library/react';
import NumberKeys from '../components/numericKeys';

test('Testing onClick events', () => {
  render(<NumberKeys />);
  const fireOne = screen.getByTestId('one');
  fireEvent.click(fireOne);
  expect(screen.getByTestId('one')).toHaveTextContent(1);
});
test('Testing onClick events', () => {
  render(<NumberKeys />);
  const fireFullStop = screen.getByTestId('full-stop');
  fireEvent.click(fireFullStop);
  expect(screen.getByTestId('full-stop')).toHaveTextContent('.');
});

test('Testing onClick events', () => {
  render(<NumberKeys />);
  const fireFullStop = screen.getByTestId('five');
  fireEvent.click(fireFullStop);
  expect(screen.getByTestId('five')).toHaveTextContent('5');
});
test('Testing onClick events', () => {
  render(<NumberKeys />);
  const fireFullStop = screen.getByTestId('four');
  fireEvent.click(fireFullStop);
  expect(screen.getByTestId('four')).toHaveTextContent(4);
});
test('Testing onClick events', () => {
  render(<NumberKeys />);
  const fireFullStop = screen.getByTestId('three');
  fireEvent.click(fireFullStop);
  expect(screen.getByTestId('three')).toHaveTextContent('3');
});
