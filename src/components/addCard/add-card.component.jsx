import React from 'react';

import { AddCardContainer } from './add-card.styles';

const AddCard = ({ columnId, addCard }) => (
  <AddCardContainer
    data-testid='addCardHandler'
    onClick={() => addCard(columnId)}
  >
    + add card
  </AddCardContainer>
);

export default AddCard;
