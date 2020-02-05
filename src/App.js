import React, { useState } from 'react';

import data from './data';

import { GlobalStyle } from './global.styles';
import { ColumnsContainer } from './App.styles';

import Card from './classes/card.class';

import Column from './components/column/column.component';
import AddCard from './components/add-card/add-card.component';

const App = () => {
  const [columns, setColumns] = useState(data);

  const addCard = columnId => {
    setColumns(
      columns.map(column => {
        if (column.id === columnId) {
          column.cards.push(new Card().toJSON());
        }
        return column;
      })
    );
  };

  const removeCard = (columnId, cardId) => {
    setColumns(
      columns.map(column => {
        if (column.id === columnId) {
          column.cards = column.cards.filter(card => card.id !== cardId);
        }
        return column;
      })
    );
  };

  const moveCard = (cardId, columnId, targetCardIndex, targetColumnId) => {
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

    setColumns(
      cloumnsWithCardRemoved.map(column => {
        if (column.id === targetColumnId) {
          column.cards.splice(targetCardIndex, 0, ...cardsToMove);
        }
        return column;
      })
    );
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <ColumnsContainer>
        {columns.map(column => (
          <div key={column.id}>
            <Column {...column} removeCard={removeCard} moveCard={moveCard} />
            <AddCard addCard={addCard} columnId={column.id} />
          </div>
        ))}
      </ColumnsContainer>
    </React.Fragment>
  );
};

export default App;
