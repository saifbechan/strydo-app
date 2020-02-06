import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { useDrag, useDrop } from 'react-dnd';
import 'jest-styled-components';

import mockStore from './../../redux/store.mock';
import { Card } from './card.component';

jest.mock('react-dnd');

useDrag.mockImplementation(() => [{ isDragging: false }, () => {}]);
useDrop.mockImplementation(() => [{ isOver: false }, () => {}]);

it('renders correctly', () => {
  const store = mockStore();
  const props = {
    id: 'abc-123',
    idx: 0
  };

  const { asFragment } = render(
    <Provider store={store}>
      <Card {...props}>Some card text</Card>
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
