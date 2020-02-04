import React from 'react';
import Card from '../card/card.component';

const Column = ({ id, title, cards }) => (
  <div className='column' id={id}>
    <h2 className='title'>{title}</h2>
    {cards.map(card => (
      <Card key={card.id} id={card.id}>
        {card.content}
      </Card>
    ))}
  </div>
);

export default Column;
