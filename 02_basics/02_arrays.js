// arrays part2

const marvel_heroes = ["Thor", "Captain America", "Ironman"]
const dc_heroes = ["Spiderman", "Batman", "Flash"]

// const new_super_heros =  marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][2]);

const newArr = marvel_heroes.concat(dc_heroes)
// console.log("New" ,newArr);

// spread operator

let real_super_heros = [...marvel_heroes, ...dc_heroes]
// console.log(real_super_heros);

const another_array = [0, 2, 1, [4, 9], 3, 7, [6, 9, 4, [5, 3, 1, 3]]]

const real_another_arr = another_array.flat(Infinity);

console.log(real_another_arr);

console.log(Array.isArray("Brij"));
console.log(Array.from("Brij"));
console.log(Array.from({ name: "Brij" }));

let value1 = 100;
let value2 = 200;
let value3 = 300;

console.log(Array.of(value1, value2, value3));

