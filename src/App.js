import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { GlobalStyle } from './global.styles';
import { ColumnsContainer } from './App.styles';

import Header from './components/header/header.component';
import Column from './components/column/column.component';
import AddCard from './components/add-card/add-card.component';

import { getBoardData } from './redux/board/board.action';

const App = ({ columns, getBoardData }) => {
  useEffect(() => {
    getBoardData();
  }, [getBoardData]);

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <ColumnsContainer>
        {columns.map(column => (
          <div key={column.id}>
            <Column {...column} />
            <AddCard columnId={column.id} />
          </div>
        ))}
      </ColumnsContainer>
    </React.Fragment>
  );
};

const mapStateToProps = ({ board: { columns } }) => ({
  columns
});

const mapDispatchToProps = dispatch => ({
  getBoardData: () => dispatch(getBoardData())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
