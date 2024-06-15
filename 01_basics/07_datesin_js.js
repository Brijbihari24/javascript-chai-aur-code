// Dates 

const myDate  = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

// const myNewDate = new Date(2024, 0, 26, 5, 30,49)
const myNewDate = new Date("2024-01-26")
console.log(myNewDate.toLocaleString());

let timeStamp  = Date.now()
console.log(timeStamp);

console.log(myNewDate.getTime());