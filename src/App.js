import React, { useState } from 'react';

import data from './data';

import { GlobalStyle } from './global.styles';
import { ColumnsContainer } from './App.styles';

import Card from './classes/card.class';

import Column from './components/column/column.component';
import AddCard from './components/addCard/add-card.component';

const App = () => {
  const [columns, setColumns] = useState(data);

  const addRow = columnId => {
    setColumns(
      columns.map(column => {
        if (column.id === columnId) {
          column.cards.push(new Card().toJSON());
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
            <Column {...column} />
            <AddCard addRow={addRow} columnId={column.id} />
          </div>
        ))}
      </ColumnsContainer>
    </React.Fragment>
  );
};

export default App;
