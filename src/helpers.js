import uuid from "uuid";
/* Select a random element from values array. */

function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

function formatPlayingCard(data) {
  return {
    ...data,
    id: uuid(),
  };
}

export { choice, formatPlayingCard };
