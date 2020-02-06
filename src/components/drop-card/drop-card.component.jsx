import React from 'react';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '../../dnd/itemtypes';

import {
  DropCardContainer,
  DropCardPlaceholderContainer
} from './drop-card.styles';

const DropCard = ({ idx, columnId, moveCard }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: item => moveCard(item.id, item.columnId, idx, columnId),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  return (
    <DropCardContainer ref={drop} isOver={isOver}>
      <DropCardPlaceholderContainer isOver={isOver} />
    </DropCardContainer>
  );
};

export default DropCard;
