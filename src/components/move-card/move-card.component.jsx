import React from 'react';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';

import { ItemTypes } from '../../dnd/itemtypes';

import { moveCard } from '../../redux/board/board.action';

import {
  MoveCardContainer,
  MoveCardPlaceholderContainer
} from './move-card.styles';

export const MoveCard = ({ idx, columnId, moveCard }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop: item =>
      moveCard({
        columnId: item.columnId,
        cardId: item.id,
        targetColumnId: columnId,
        targetIndex: idx
      }),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop()
    })
  });

  return (
    <MoveCardContainer
      ref={drop}
      isOver={isOver}
      data-testid='move-card-handler'
    >
      <MoveCardPlaceholderContainer isOver={isOver} />
    </MoveCardContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  moveCard: ({ columnId, cardId, targetColumnId, targetIndex }) =>
    dispatch(moveCard({ columnId, cardId, targetColumnId, targetIndex }))
});

export default connect(null, mapDispatchToProps)(MoveCard);
