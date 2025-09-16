import { heroes, type Hero, type Owner } from '../data/heroes.data';

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  const resHeroes: Hero[] = [];

  heroes.forEach((hero) => {
    if (hero.owner === owner) {
      resHeroes.push(hero);
    }
  });

  return resHeroes;
};
