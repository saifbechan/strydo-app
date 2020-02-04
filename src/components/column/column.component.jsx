import React from 'react';
import Card from '../card/card.component';
import { ColumnContainer, H2Container, CardsContainer } from './column.styles';

const Column = ({ id, title, backgroundColor, cards }) => (
  <ColumnContainer id={id}>
    <H2Container backgroundColor={backgroundColor}>{title}</H2Container>
    <CardsContainer>
      {cards.map(card => (
        <Card key={card.id} id={card.id}>
          {card.content}
        </Card>
      ))}
    </CardsContainer>
  </ColumnContainer>
);

export default Column;
