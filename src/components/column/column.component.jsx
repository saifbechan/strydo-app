import React from 'react';

import Card from '../card/card.component';
import DropCard from './../drop-card/drop-card.component';

import { ColumnContainer, H3Container, CardsContainer } from './column.styles';

const Column = ({ id, title, backgroundColor, cards }) => (
  <ColumnContainer id={id}>
    <H3Container backgroundColor={backgroundColor}>{title}</H3Container>
    <CardsContainer>
      <DropCard idx={0} columnId={id} />
      {cards.map((card, idx) => (
        <Card key={card.id} id={card.id} idx={idx} columnId={id}>
          {card.content}
        </Card>
      ))}
    </CardsContainer>
  </ColumnContainer>
);

export default Column;
