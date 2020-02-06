import { boardReducer } from './board.reducer';
import BoardActionTypes from './board.types';

import data from '../board-data';

jest.mock('../board-data');

data.mockImplementation(() => jest.fn());

const initialState = {
  columns: []
};

let mockPrevState = [];
beforeEach(() => {
  mockPrevState = {
    columns: [
      {
        id: '123-abc',
        title: 'xyz',
        backgroundColor: '#FFF',
        cards: [
          {
            id: 'abc-123',
            content: 'content'
          },
          {
            id: 'def-456',
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
    ]
  };
});

it('should return initial state', () => {
  expect(boardReducer(undefined, {})).toEqual(initialState);
});

it('should get the data from the data file', () => {
  boardReducer(mockPrevState, {
    type: BoardActionTypes.GET_BOARD_DATA
  });

  expect(data).toHaveBeenCalled();
});

it('should add a card to a column', () => {
  expect(
    boardReducer(mockPrevState, {
      type: BoardActionTypes.ADD_CARD,
      payload: '123-abc'
    }).columns[0].cards.length
  ).toBe(3);
});

it('should remove a card from a column', () => {
  expect(
    boardReducer(mockPrevState, {
      type: BoardActionTypes.REMOVE_CARD,
      payload: { columnId: '123-abc', cardId: 'abc-123' }
    }).columns[0].cards.length
  ).toBe(1);
});

it('should move a card from a column to another', () => {
  expect(
    boardReducer(mockPrevState, {
      type: BoardActionTypes.MOVE_CARD,
      payload: {
        columnId: '123-abc',
        cardId: 'abc-123',
        targetColumnId: '456-def',
        targetCardIndex: 0
      }
    }).columns[0].cards.length
  ).toBe(1);
});
