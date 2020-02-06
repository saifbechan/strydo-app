import React, { useState } from 'react';

import data from './data';

import { GlobalStyle } from './global.styles';
import { ColumnsContainer } from './App.styles';

import Header from './components/header/header.component';
import Column from './components/column/column.component';
import AddCard from './components/add-card/add-card.component';

import { addCard, removeCard, moveCard } from './utils/column.utils';

const App = () => {
  const [columns, setColumns] = useState(data);

  const handleAddCard = (...args) => setColumns(addCard(columns, ...args));
  const handleRemoveCard = (...args) =>
    setColumns(removeCard(columns, ...args));
  const handleMoveCard = (...args) => setColumns(moveCard(columns, ...args));

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <ColumnsContainer>
        {columns.map(column => (
          <div key={column.id}>
            <Column
              {...column}
              removeCard={handleRemoveCard}
              moveCard={handleMoveCard}
            />
            <AddCard addCard={handleAddCard} columnId={column.id} />
          </div>
        ))}
      </ColumnsContainer>
    </React.Fragment>
  );
};

export default App;
