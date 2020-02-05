import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import App from './App';

import data from './data';

jest.mock('./data');

it('renders correctly when there is no data', () => {
  data.mockImplementation(() => []);

  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correctly when there is no data', () => {
  data.mockImplementation(() => [
    {
      id: '123-abc',
      title: 'xyz',
      backgroundColor: '#FFF',
      cards: []
    }
  ]);

  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('adds a card when the `add-card-handler` is clicked', () => {
  data.mockImplementation(() => [
    {
      id: '123-abc',
      title: 'xyz',
      backgroundColor: '#FFF',
      cards: [
        {
          id: 'abc-123',
          content: 'content'
        }
      ]
    },
    {
      id: '456-def',
      title: 'nop',
      backgroundColor: '#000',
      cards: []
    }
  ]);

  const { getAllByTestId } = render(<App />);

  fireEvent.click(getAllByTestId('add-card-handler')[0]);
  expect(getAllByTestId('card')).toHaveLength(2);

  fireEvent.click(getAllByTestId('add-card-handler')[0]);
  expect(getAllByTestId('card')).toHaveLength(3);
});
