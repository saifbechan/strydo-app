import BoardActionTypes from './board.types';

export const getBoardData = () => ({
  type: BoardActionTypes.GET_BOARD_DATA
});

export const removeCard = card => ({
  type: BoardActionTypes.REMOVE_CARD,
  payload: card
});
