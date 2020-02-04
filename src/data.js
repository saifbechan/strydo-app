import uuidv1 from 'uuid/v1';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 6,
    min: 3
  }
});

export default [
  {
    id: uuidv1(),
    title: 'Backlog',
    cards: [
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      }
    ]
  },
  {
    id: uuidv1(),
    title: 'To do',
    cards: [
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      }
    ]
  },
  {
    id: uuidv1(),
    title: 'In progress',
    cards: [
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      }
    ]
  },
  {
    id: uuidv1(),
    title: 'Test',
    cards: [
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      }
    ]
  },
  {
    id: uuidv1(),
    title: 'Done',
    cards: [
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      },
      {
        id: uuidv1(),
        content: lorem.generateSentences(2)
      }
    ]
  }
];
