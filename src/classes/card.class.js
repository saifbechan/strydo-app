import uuidv1 from 'uuid/v1';
import { LoremIpsum } from 'lorem-ipsum';

const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 6,
    min: 3
  }
});

class Card {
  constructor() {
    this.id = uuidv1();
    this.content = lorem.generateSentences(2);
  }
  toJSON() {
    return {
      id: this.id,
      content: this.content
    };
  }
}

export default Card;
