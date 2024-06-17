//objects

// singleton

//object literals

const mySym = Symbol("key1");

const JsUser =  {
    name:"Brij",
    age:11,
    [mySym]: "mykey1",
    "Full Name": "Brijbihari Awadhiya",
    email:"brij@amazon.com",
    location:"Gurugram",
    isLoggedIn: false,
    lastLoggedInDay: ["Monday", "Friday"]
}

// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["Full Name"]);

console.log(JsUser[mySym]);

JsUser.email =  "brij@test.com";
// Object.freeze(JsUser)

JsUser.email =  "brij@deloite.com";
console.log(JsUser);

JsUser.greetings  = function(){
    console.log("Hello Js User");
}

// console.log(JsUser.greetings());

JsUser.greetingTwo  = function(){
    console.log(`Hello Js User, ${this.name}`);
}

console.log(JsUser.greetings());
console.log(JsUser.greetingTwo());






