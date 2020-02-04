import uuidv1 from 'uuid/v1';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 6,
    min: 3
  }
});

class Card {
  constructor(id = uuidv1(), content = lorem.generateSentences(2)) {
    this.id = id;
    this.content = content;
  }

  getId = () => this.id;

  getContent = () => this.content;

  toJSON = () => ({
    id: this.id,
    content: this.content
  });
}

export default Card;
