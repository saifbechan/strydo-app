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
    default:
      return state;
  }
};

export default boardReducer;
