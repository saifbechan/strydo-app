import boardData from '../board-data';
import BoardActionTypes from './board.types';

const INITIAL_STATE = {
  columns: []
};

const boardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BoardActionTypes.GET_BOARD_DATA:
      return {
        ...state,
        columns: boardData()
      };
    case BoardActionTypes.REMOVE_CARD:
      const {
        payload: { columnId, cardId }
      } = action;
      const { columns } = state;
      return {
        ...state,
        columns: columns.map(column => {
          if (column.id === columnId) {
            column.cards = column.cards.filter(card => card.id !== cardId);
          }
          return column;
        })
      };
    default:
      return state;
  }
};

export default boardReducer;
