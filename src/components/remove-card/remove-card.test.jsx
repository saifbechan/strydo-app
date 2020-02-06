import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import mockStore from './../../redux/store.mock';

import RemoveCard, {
  RemoveCard as RemoveCardPure
} from './remove-card.component';

const props = {
  columnId: 'abc-123',
  cardId: 'def-456'
};

it('renders correctly', () => {
  const { asFragment } = render(<RemoveCardPure {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls removeCard with the correct payload on click', () => {
  const store = mockStore();

  const { getByTestId } = render(<RemoveCard store={store} {...props} />);

  fireEvent.click(getByTestId('remove-card-handler'));

  expect(store.getActions()).toEqual([
    { type: 'REMOVE_CARD', payload: { ...props } }
  ]);
});
