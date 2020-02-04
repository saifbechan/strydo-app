import uuidv1 from 'uuid/v1';
import { LoremIpsum } from 'lorem-ipsum';
import randomColor from 'randomcolor';

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
    backgroundColor: randomColor(),
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
    backgroundColor: randomColor(),
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
    backgroundColor: randomColor(),
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
    backgroundColor: randomColor(),
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
    backgroundColor: randomColor(),
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
