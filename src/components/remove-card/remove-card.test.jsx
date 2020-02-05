import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import RemoveCard from './remove-card.component';

const props = {
  columnId: 'abc-123',
  cardId: 'def-456',
  removeCard: jest.fn()
};

it('renders correctly', () => {
  const { asFragment } = render(<RemoveCard {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls removeCard with the correct id on click', () => {
  const { getByTestId } = render(<RemoveCard {...props} />);

  fireEvent.click(getByTestId('remove-card-handler'));

  expect(props.removeCard).toHaveBeenCalledWith(props.columnId, props.cardId);
});
