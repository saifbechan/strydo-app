import uuidv1 from 'uuid/v1';
import randomColor from 'randomcolor';

import Card from './classes/card.class';

export default () => [
  {
    id: uuidv1(),
    title: 'Backlog',
    backgroundColor: randomColor(),
    cards: [
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON()
    ]
  },
  {
    id: uuidv1(),
    title: 'To do',
    backgroundColor: randomColor(),
    cards: [
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON()
    ]
  },
  {
    id: uuidv1(),
    title: 'In progress',
    backgroundColor: randomColor(),
    cards: [
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON()
    ]
  },
  {
    id: uuidv1(),
    title: 'Test',
    backgroundColor: randomColor(),
    cards: [
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON()
    ]
  },
  {
    id: uuidv1(),
    title: 'Done',
    backgroundColor: randomColor(),
    cards: [
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON(),
      new Card().toJSON()
    ]
  }
];
