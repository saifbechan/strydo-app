import BoardActionTypes from './board.types';
import { addCard, removeCard, getBoardData, moveCard } from './board.action';

it('should create the getBoardData action', () => {
  expect(getBoardData().type).toEqual(BoardActionTypes.GET_BOARD_DATA);
});

it('should create the addCard action', () => {
  expect(addCard().type).toEqual(BoardActionTypes.ADD_CARD);
});

it('should create the remoeCard action', () => {
  const mockItem = {
    columnId: '123-abc',
    cardId: 'abc-123'
  };

  const action = removeCard(mockItem);

  expect(action.type).toEqual(BoardActionTypes.REMOVE_CARD);
  expect(action.payload).toEqual(mockItem);
});

it('should create the moveCard action', () => {
  const mockItem = {
    columnId: '123-abc',
    cardId: 'abc-123',
    targetIndex: 0,
    targetColumnId: '456-def'
  };

  const action = moveCard(mockItem);

  expect(action.type).toEqual(BoardActionTypes.MOVE_CARD);
  expect(action.payload).toEqual(mockItem);
});
