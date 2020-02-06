import React from 'react';
import {
  HeaderComponent,
  HeaderTitleComponent,
  HeaderSubTitleComponent,
  HeaderLogoComponent
} from './header.styles';

const Header = () => (
  <HeaderComponent>
    <HeaderLogoComponent src='/logo.png' />
    <HeaderTitleComponent>Strydo App</HeaderTitleComponent>
    <HeaderSubTitleComponent>
      a lightweight kanban board showcase app
    </HeaderSubTitleComponent>
  </HeaderComponent>
);

export default Header;
