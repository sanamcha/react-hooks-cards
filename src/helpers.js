import uuid from "uuid";

/* Select a random element from values array. */
function choice(val) {
  const randIdx = Math.floor(Math.random() * val.length);
  return val[randIdx];
}

//added formatCard, formatPokemon
const formatCard = (data) => {
  return {
    image: data.cards[0].image, id: uuid()
  };
}

const formatPokemon = (data) => {
  return {
    id: uuid(),
    front: data.sprites.front_default,
    back: data.sprites.back_default,
    name: data.name,
    stats: data.stats.map(stat => ({
      value: stat.base_stat,
      name: stat.stat.name
    }))
  };
}


export { choice, formatCard, formatPokemon };