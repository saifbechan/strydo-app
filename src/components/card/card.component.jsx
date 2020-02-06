import React from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from '../../dnd/itemtypes';

import RemoveCard from '../remove-card/remove-card.component';
import MoveCard from '../move-card/move-card.component';

import { CardContainer } from './card.styles';

export const Card = ({ id, idx, columnId, children }) => {
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
        <RemoveCard columnId={columnId} cardId={id} />
      </CardContainer>
      <MoveCard idx={++idx} columnId={columnId} />
    </div>
  );
};

export default Card;
