import React from 'react';
import { CardContainer } from './card.styles';
import RemoveCard from '../remove-card/remove-card.component';

const Card = ({ id, columnId, removeCard, children }) => (
  <CardContainer id={id} data-testid='card'>
    {children}
    <RemoveCard columnId={columnId} cardId={id} removeCard={removeCard} />
  </CardContainer>
);

export default Card;
