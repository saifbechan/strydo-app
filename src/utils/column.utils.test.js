import { addCard, removeCard, moveCard } from './column.utils';

let columns;
beforeEach(() => {
  columns = [
    {
      id: '123-abc',
      cards: []
    },
    {
      id: '345-def',
      cards: [
        {
          id: 'abc-123',
          content: 'qwerty'
        },
        {
          id: 'def-456',
          content: 'qwerty'
        }
      ]
    }
  ];
});

it('adds a card to a column if the column id matches', () => {
  const newColumns = addCard(columns, '123-abc');
  expect(newColumns[0].cards.length).toBe(1);
  expect(newColumns[1].cards.length).toBe(2);
});

it('does not add a card to a column if the column id does not match', () => {
  const newColumns = addCard(columns, '123-abcdef');
  expect(newColumns[0].cards.length).toBe(0);
  expect(newColumns[1].cards.length).toBe(2);
});

it('removes a card from a column if the column id and card id matches', () => {
  const newColumns = removeCard(columns, '345-def', 'abc-123');
  expect(newColumns[0].cards.length).toBe(0);
  expect(newColumns[1].cards.length).toBe(1);
});

it('does not remove a card from a column if the column id and card id do not match', () => {
  const newColumns = removeCard(columns, '345-defgh', 'abc-123');
  expect(newColumns[0].cards.length).toBe(0);
  expect(newColumns[1].cards.length).toBe(2);
});

it('moves a card from one column to another if the column id and card id matches', () => {
  const newColumns = moveCard(columns, 'def-456', '345-def', 0, '123-abc');
  expect(newColumns[0].cards.length).toBe(1);
  expect(newColumns[1].cards.length).toBe(1);
});
