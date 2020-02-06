import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend';

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <DndProvider backend={Backend}>
      <App />
    </DndProvider>
  </Provider>,
  document.getElementById('root')
);
