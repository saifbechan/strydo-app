import BoardActionTypes from './board.types';

export const getBoardData = () => ({
  type: BoardActionTypes.GET_BOARD_DATA
});

export const removeCard = ({ columnId, cardId }) => ({
  type: BoardActionTypes.REMOVE_CARD,
  payload: { columnId, cardId }
});

export const addCard = columnId => ({
  type: BoardActionTypes.ADD_CARD,
  payload: columnId
});

export const moveCard = ({
  columnId,
  cardId,
  targetColumnId,
  targetIndex
}) => ({
  type: BoardActionTypes.MOVE_CARD,
  payload: { columnId, cardId, targetColumnId, targetIndex }
});
