import boardData from '../board-data';
import BoardActionTypes from './board.types';
import Card from './../../classes/card.class';

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
    case BoardActionTypes.ADD_CARD:
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === action.payload) {
            column.cards.push(new Card().toJSON());
          }
          return column;
        })
      };
    case BoardActionTypes.REMOVE_CARD:
      return {
        ...state,
        columns: state.columns.map(column => {
          if (column.id === action.payload.columnId) {
            column.cards = column.cards.filter(
              card => card.id !== action.payload.cardId
            );
          }
          return column;
        })
      };
    default:
      return state;
  }
};

export default boardReducer;
