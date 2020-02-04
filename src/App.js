import React from 'react';

import data from './data';

import { GlobalStyle } from './global.styles';
import { ColumnsContainer } from './App.styles';

import Column from './components/column/column.component';

const App = () => (
  <React.Fragment>
    <GlobalStyle />
    <ColumnsContainer>
      {data.map(column => (
        <Column key={column.id} {...column} />
      ))}
    </ColumnsContainer>
  </React.Fragment>
);

export default App;
