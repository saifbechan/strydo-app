import React from 'react';
import { connect } from 'react-redux';

import { removeCard } from '../../redux/board/board.action';

import { RemoveCardContainer } from './remove-card.styles';

export const RemoveCard = ({ columnId, cardId, removeCard }) => (
  <RemoveCardContainer
    data-testid='remove-card-handler'
    onClick={() => removeCard({ columnId, cardId })}
  >
    - remove card
  </RemoveCardContainer>
);

const mapDispatchToProps = dispatch => ({
  removeCard: ({ columnId, cardId }) =>
    dispatch(removeCard({ columnId, cardId }))
});

export default connect(null, mapDispatchToProps)(RemoveCard);
