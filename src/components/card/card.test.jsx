import React from 'react';
import { render } from '@testing-library/react';

import Card from './card.component';

const props = {
  id: 'abc-123'
};

const children = 'child';

it('renders correctly', () => {
  const { asFragment } = render(<Card {...props}>{children}</Card>);
  expect(asFragment()).toMatchSnapshot();
});
