import { heroes, type Hero, type Owner } from '../data/heroes.data';

const getHeroByID = (id: number): Hero | undefined => {
  const hero = heroes.find((hero) => {
    return hero.id === id;
  });
  if (!hero) {
    throw new Error(`Hero with id ${id} not found`);
  }
  return hero;
};

export const getHeroesByOwner = (owner: Owner): Hero[] => {
  // const resHeroes: Hero[] = [];

  // heroes.forEach((hero) => {
  //   if (hero.owner === owner) {
  //     resHeroes.push(hero);
  //   }
  // });
  const resHeroes: Hero[] = heroes.filter((hero) => hero.owner === owner);

  console.log(getHeroByID(3));

  return resHeroes;
};
