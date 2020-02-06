import styled from 'styled-components';

export const MoveCardContainer = styled.div`
  height: ${({ isOver }) => (isOver ? '100px' : '5px')};
  padding: 5px;
`;

export const MoveCardPlaceholderContainer = styled.div`
  background: ${({ isOver }) => (isOver ? 'snow' : 'none')};
  border: ${({ isOver }) => (isOver ? '1px dashed grey' : 'none')};
  height: 100%;
`;
