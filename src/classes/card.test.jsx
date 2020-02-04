import Card from './card.class';

it('creates a card with a random id and content', () => {
  const card = new Card();

  expect(card.toJSON()).toEqual({
    id: card.getId(),
    content: card.getContent()
  });
});

it('creates a card with set id and content', () => {
  const card = new Card(5, 'text');

  expect(card.toJSON()).toEqual({
    id: 5,
    content: 'text'
  });
});
