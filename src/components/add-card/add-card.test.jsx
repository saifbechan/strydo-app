import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import mockStore from './../../redux/store.mock';

import AddCard, { AddCard as AddCardPure } from './add-card.component';

const props = {
  columnId: 'abc-123'
};

it('renders correctly', () => {
  const { asFragment } = render(<AddCardPure {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls addCard with the correct payload on click', () => {
  const store = mockStore();

  const { getByTestId } = render(<AddCard store={store} {...props} />);

  fireEvent.click(getByTestId('add-card-handler'));

  expect(store.getActions()).toEqual([
    { type: 'ADD_CARD', payload: 'abc-123' }
  ]);
});
