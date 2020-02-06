import React from 'react';
import ReactDOM from 'react-dom';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import App from './App';

ReactDOM.render(
  <DndProvider backend={Backend}>
    <App />
  </DndProvider>,
  document.getElementById('root')
);
