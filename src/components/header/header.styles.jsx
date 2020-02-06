import styled from 'styled-components';

export const HeaderComponent = styled.div`
  display: grid;
  grid-template-columns: 140px auto;
  margin: 0 0 0 100px;
`;

export const HeaderLogoComponent = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  margin: 20px 0;
  padding: 0;
`;

export const HeaderTitleComponent = styled.h1`
  font-family: 'Lato';
  font-size: 3em;
  font-weight: bold;
  margin: 30px 0 0;
  padding: 0;
`;

export const HeaderSubTitleComponent = styled.h2`
  color: grey;
  font-size: 1em;
  font-style: italic;
  margin: 0 0 25px;
  padding: 0;
`;
