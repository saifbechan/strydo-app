import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './header.component';

test('shows the name of the page', () => {
  render(<Header />);
  expect(screen.getByText('Strydo App')).toBeInTheDocument();
});
