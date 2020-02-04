import React from 'react';

import { AddCardContainer } from './add-card.styles';

const AddCard = ({ columnId, addRow }) => (
  <AddCardContainer onClick={() => addRow(columnId)}>
    + add card
  </AddCardContainer>
);

export default AddCard;
