import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { useDrag, useDrop } from 'react-dnd';
import 'jest-styled-components';

import { Column } from './column.component';

import mockStore from '../../redux/store.mock';

jest.mock('react-dnd');

useDrag.mockImplementation(() => [{ isDragging: false }, () => {}]);
useDrop.mockImplementation(() => [{ isOver: false }, () => {}]);

it('renders correctly', () => {
  const props = {
    id: 'abc-123',
    title: 'xyz',
    backgroundColor: '#FFF',
    cards: [
      {
        id: '123-abc',
        content: 'content'
      }
    ]
  };

  const { asFragment } = render(
    <Provider store={mockStore()}>
      <Column {...props} />
    </Provider>
  );
  expect(asFragment()).toMatchSnapshot();
});
