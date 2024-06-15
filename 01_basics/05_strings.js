const name = "brij";

const repoCount  =  100;

console.log(`Hello My Name is ${name} & my Repo Count is ${repoCount}`);

//other way to declara a string
const gameName = new String("brij-Town-delhi")

console.log(gameName);

// console.log(gameName[1]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("j"));

const newSting = gameName.substring(0, 3)
console.log(newSting);

const anotherNewString =  gameName.slice(-8,4)
console.log(anotherNewString);


const anotherStringOne  = "  brij   "
console.log(anotherStringOne);
console.log(anotherStringOne.trim());

const url = "https://studio1915.com/testimonials%20latest"
const newUrl = url.replace("%20", "-");

console.log(newUrl);

console.log(url.includes("1915"));

console.log(gameName.split("-"));
