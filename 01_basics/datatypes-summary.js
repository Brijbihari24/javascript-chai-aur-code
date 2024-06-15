// 2 types of data in js

// Primitive
//  7 types: String, Number, Boolean, null, undefined, symbol, BigInt

const avenger = "Ironman";

const rollnumber = 50;

const isLoggedIn = true;

const outsideTemp = null;

let isWorking;

const id = Symbol("1234")
const anotherId = Symbol("1234")

const userId = 123343446665453n;

// console.log(typeof avenger);
// console.log(typeof rollnumber);
// console.log(typeof isLoggedIn);
// console.log(typeof outsideTemp);
// console.log(typeof isWorking);
// console.log(typeof id);
// console.log(typeof anotherId);
// console.log(typeof userId);

// Reference (Non Primitive)
// Array, Objects, functions 

const avengers = ["Ironman", "CaptainAmerica", "Thor"];

const user = {
    name: "Brij",
    age: "18",
};

let someFunction = function () {
    // console.log("Hello World");
    return;
}

// console.log(typeof avengers);
// console.log(typeof user);
// console.log(typeof someFunction);

// -----------------------------------------------------------------

// Stack (Primitive) Heap (Non-Primitive)

let myYoutubeChannel = "AvengersTv";

let anotherYoutubeChannel = myYoutubeChannel;
anotherYoutubeChannel = "MarvelsShows"


console.log(myYoutubeChannel);
console.log(anotherYoutubeChannel);
console.log(myYoutubeChannel);

const userOne = {
    email: "userone@test.com",
    upiId: "123@ybl"
}
const userTwo = userOne

console.log(userTwo);

userTwo.email = "updatdemail@test.com"

console.log(userTwo);
console.log(userOne);
