import Card from '../classes/card.class';

export const addCard = (columns, columnId) =>
  columns.map(column => {
    if (column.id === columnId) {
      column.cards.push(new Card().toJSON());
    }
    return column;
  });

export const removeCard = (columns, columnId, cardId) =>
  columns.map(column => {
    if (column.id === columnId) {
      column.cards = column.cards.filter(card => card.id !== cardId);
    }
    return column;
  });

export const moveCard = (
  columns,
  cardId,
  columnId,
  targetCardIndex,
  targetColumnId
) => {
  const cardsToMove = [];
  const cloumnsWithCardRemoved = columns.map(column => {
    if (column.id === columnId) {
      column.cards = column.cards.filter(card => {
        if (card.id !== cardId) {
          return true;
        }
        cardsToMove.push(card);
        return false;
      });
    }
    return column;
  });

  return cloumnsWithCardRemoved.map(column => {
    if (column.id === targetColumnId) {
      column.cards.splice(targetCardIndex, 0, ...cardsToMove);
    }
    return column;
  });
};
