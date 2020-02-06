import React from 'react';
import { render } from '@testing-library/react';
import { useDrag, useDrop } from 'react-dnd';
import 'jest-styled-components';

import Card from './card.component';

jest.mock('react-dnd');

useDrag.mockImplementation(() => [{ isDragging: false }, () => {}]);
useDrop.mockImplementation(() => [{ isOver: false }, () => {}]);

const children = 'child';

it('renders the first card correctly', () => {
  const props = {
    id: 'abc-123',
    idx: 0
  };

  const { asFragment } = render(<Card {...props}>{children}</Card>);
  expect(asFragment()).toMatchSnapshot();
});

it('renders the second and further cards correctly', () => {
  const props = {
    id: 'abc-123',
    idx: 1
  };

  const { asFragment } = render(<Card {...props}>{children}</Card>);
  expect(asFragment()).toMatchSnapshot();
});
