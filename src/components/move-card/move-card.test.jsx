import React from 'react';
import { useDrop } from 'react-dnd';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import mockStore from './../../redux/store.mock';

import MoveCard, { MoveCard as MoveCardPure } from './move-card.component';

jest.mock('react-dnd');

useDrop.mockImplementation(() => [{ isOver: false }, () => {}]);

const props = {
  idx: 0,
  columnId: 'abc-123'
};

it('renders correctly', () => {
  const { asFragment } = render(<MoveCardPure {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

it('calls moveCard with the correct payload on click', () => {
  const store = mockStore();

  const { getByTestId } = render(<MoveCard store={store} {...props} />);

  fireEvent.drop(getByTestId('move-card-handler'));

  expect(store.getActions()).toEqual([]);
});
