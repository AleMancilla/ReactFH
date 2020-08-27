import heroes , {owners} from '../data/heroes';
console.log(owners);
console.log(heroes);

export const getHeroes = (id)=>heroes.find((heroe)=>heroe.id === id);

// console.log(getHeroes(2));


export const getHeroesByOwner = (owner)=>heroes.filter((heroe)=>heroe.owner === owner);

// console.log(getHeroesByOwner('DC')); 