import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import FormPage from '../components/pages/form-page/FormPage';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

const store = mockStore({
  formReducer: {
    cardsData: [],
  },
});

describe('FormPage component', () => {
  it('renders the list of PersonCard components', () => {
    const { queryAllByRole } = render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(queryAllByRole('listitem').length).toEqual(0); // expect the list to be empty initially
  });
});
