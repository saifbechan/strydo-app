import React from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '../../dnd/itemtypes';

import RemoveCard from '../remove-card/remove-card.component';

import { CardContainer } from './card.styles';
import DropCard from './../drop-card/drop-card.component';

const Card = ({ id, idx, columnId, removeCard, moveCard, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, id, columnId },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div>
      <CardContainer
        id={id}
        data-testid='card'
        ref={drag}
        isDragging={isDragging}
      >
        {children}
        <RemoveCard columnId={columnId} cardId={id} removeCard={removeCard} />
      </CardContainer>
      <DropCard idx={++idx} columnId={columnId} moveCard={moveCard} />
    </div>
  );
};

export default Card;
