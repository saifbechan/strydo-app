import React from 'react';
import { RemoveCardContainer } from './remove-card.styles';

const RemoveCard = ({ columnId, cardId, removeCard }) => (
  <RemoveCardContainer
    data-testid='remove-card-handler'
    onClick={() => removeCard(columnId, cardId)}
  >
    - remove card
  </RemoveCardContainer>
);

export default RemoveCard;
