import React from 'react';
import { CardContainer } from './card.styles';

const Card = ({ id, children }) => (
  <CardContainer id={id} data-testid='card'>
    {children}
  </CardContainer>
);

export default Card;
