import React from 'react';

import { AddCardContainer } from './add-card.styles';

const AddCard = ({ columnId, addCard }) => (
  <AddCardContainer
    data-testid='add-card-handler'
    onClick={() => addCard(columnId)}
  >
    + add card
  </AddCardContainer>
);

export default AddCard;
