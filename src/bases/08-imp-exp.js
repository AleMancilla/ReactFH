import heroes , {owners} from './data/heroes.js'
console.log(owners);
console.log(heroes);

const getHeroes = (id)=>heroes.find((heroe)=>heroe.id === id);

console.log(getHeroes(2));


const getHeroesByOwner = (owner)=>heroes.filter((heroe)=>heroe.owner === owner);

console.log(getHeroesByOwner('DC')); 