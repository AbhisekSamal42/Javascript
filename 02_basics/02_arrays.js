const marvels_hero = ['Thor','Ironman']
const dc_hero = ['Batman','flash']

// marvels_hero.push(dc_hero)

// console.log(marvels_hero);
// console.log(marvels_hero[2][1]);

// Concat Method

const allhero = marvels_hero.concat(dc_hero)
console.log(allhero);

// Sprade Method

const all_hero = [...marvels_hero,...dc_hero]
console.log(all_hero);

// Flat Method

const another_array = [1,2,3,[4,5,6],7,[6,7,[8,76,9,7,56]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Form Method

console.log(Array.from("Abhisek"));

// Of Method

let score1 = 200
let score2 = 500
let score3 = 600

console.log(Array.of(score1,score2,score3));
