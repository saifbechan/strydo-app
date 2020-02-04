import styled from 'styled-components';

export const ColumnsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-template-rows: repeat(2, 200px);
  grid-gap: 15px;

  margin: 0 15px;
`;
