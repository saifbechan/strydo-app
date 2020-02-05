import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import AddCard from './add-card.component';

const props = {
  columnId: 'abc-123',
  addCard: jest.fn()
};

it('renders correctly', () => {
  const { asFragment } = render(<AddCard {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls addRow with the correct id on click', () => {
  const { getByTestId } = render(<AddCard {...props} />);

  fireEvent.click(getByTestId('add-card-handler'));

  expect(props.addCard).toHaveBeenCalledWith(props.columnId);
});
