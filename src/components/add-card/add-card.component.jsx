import React from 'react';
import { connect } from 'react-redux';

import { addCard } from '../../redux/board/board.action';

import { AddCardContainer } from './add-card.styles';

export const AddCard = ({ columnId, addCard }) => (
  <AddCardContainer
    data-testid='add-card-handler'
    onClick={() => addCard(columnId)}
  >
    + add card
  </AddCardContainer>
);

const mapDispatchToProps = dispatch => ({
  addCard: columnId => dispatch(addCard(columnId))
});

export default connect(null, mapDispatchToProps)(AddCard);
