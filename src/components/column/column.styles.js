import styled from 'styled-components';

export const ColumnContainer = styled.div`
  border: 1px solid grey;
`;

export const H2Container = styled.h2`
  background-color: ${({ backgroundColor }) => `${backgroundColor}`};
  font-size: 15px;
  margin: 0;
  padding: 10px;
`;

export const CardsContainer = styled.div`
  border-top: 1px solid grey;
`;
