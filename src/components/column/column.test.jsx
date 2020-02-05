import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Column from './column.component';

const props = {
  id: 'abc-123',
  title: 'xyz',
  backgroundColor: '#FFF',
  cards: []
};

it('renders correctly when there are no cards', () => {
  const { asFragment } = render(<Column {...props} />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders correctly when there are cards', () => {
  const propsWithCards = {
    ...props,
    cards: [{ id: '123-abc', content: 'content' }]
  };
  const { asFragment } = render(<Column {...propsWithCards} />);
  expect(asFragment()).toMatchSnapshot();
});
