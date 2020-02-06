import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { useDrag, useDrop } from 'react-dnd';
import 'jest-styled-components';

import App from './App';
import { INITIAL_STATE } from './redux/board/board.reducer';
import mockStore from './redux/store.mock';
import rootReducer from './redux/root-reducer';

import data from './redux/board-data';

jest.mock('react-dnd');
jest.mock('./redux/board-data');

useDrag.mockImplementation(() => [{ isDragging: false }, () => {}]);
useDrop.mockImplementation(() => [{ isOver: false }, () => {}]);

data.mockImplementation(() => [
  {
    id: 'abc-123',
    title: 'xyz',
    backgroundColor: '#FFF',
    cards: [
      {
        id: '123-abc',
        content: 'content'
      }
    ]
  }
]);

const renderWithRedux = (
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
};

it('renders correctly with redux with defaults', () => {
  const store = mockStore({ board: INITIAL_STATE });

  const { asFragment } = render(<App store={store} />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correctly with redux with new data on mount', () => {
  const { asFragment } = renderWithRedux(<App />);
  expect(asFragment()).toMatchSnapshot();
});
