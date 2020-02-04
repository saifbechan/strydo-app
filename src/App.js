import React from 'react';

import data from './data';

import './App.css';

import Column from './components/column/column.component';

function App() {
  return (
    <div className='App'>
      {data.map(column => (
        <Column key={column.id} {...column} />
      ))}
    </div>
  );
}

export default App;
