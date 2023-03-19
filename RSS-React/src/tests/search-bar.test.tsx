import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../components/search-bar/search-bar';

test('SearchBar should update state value when text is entered', () => {
  const { getByRole } = render(<SearchBar />);
  const input = getByRole('textbox');
  fireEvent.change(input, { target: { value: 'test' } });
  expect(input).toHaveValue('test');
});

test('handleChange sets the value state correctly', () => {
  const { getByRole } = render(<SearchBar />);
  const input = getByRole('textbox');
  const testValue = 'test value';
  fireEvent.change(input, { target: { value: testValue } });
  expect(input).toHaveValue(testValue);
});

test('componentWillUnmount sets the input value in local storage', () => {
  const testValue = 'test value';
  const { unmount } = render(<SearchBar />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: testValue } });
  unmount();
  expect(localStorage.getItem('input')).toBe(testValue);
});
