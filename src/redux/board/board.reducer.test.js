import boardReducer from './board.reducer';

const initialState = {
  columns: []
};

it('should return initial state', () => {
  expect(boardReducer(undefined, {})).toEqual(initialState);
});
