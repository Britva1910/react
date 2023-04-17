import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import SearchBar from '../components/search-bar/SearchBar';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

test('handleChange sets the value state correctly', () => {
  const store = mockStore({
    searchReducer: {
      userInput: '',
    },
  });

  const testValue = 'test value';

  const { getByRole } = render(
    <Provider store={store}>
      <SearchBar />
    </Provider>
  );

  const input = getByRole('textbox');
  fireEvent.change(input, { target: { value: testValue } });

  expect(input).toHaveValue(testValue);
});
