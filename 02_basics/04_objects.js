// singleton

// const tinderUser = new Object();

const tinderUser = {};

tinderUser.id = 123,
    tinderUser.age = 18,
    tinderUser.userName = "brij"

// console.log(tinderUser);

const regularUser = {
    email: "brij@test.com",
    usename: {
        userFullName: {
            firstName: "Brijbihari",
            lastName: "Awadhiya"
        }
    },

}

// console.log(regularUser.email);

// console.log(regularUser?.usename?.userFullName?.firstName);


const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj4 = { 5: "f", 6: "g" };


// const obj3 = Object.assign({}, obj1, obj2, obj4);

// this is the best way,

const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users =  [
    {
        id:"01",
        username:"userA"
        
    },
    {
        id:"02",
        username:"userB"
    },
    {
        id:"03",
        username:"userC"
    },
    {
        id:"04",
        username:"userD"
    },
]

// console.log(users[1].username);


// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("age"));

// object de-structure and API's Intro

const course = {
    courseName : "Js in hindi",
    price:999,
    courseInstructor:"brij",
}

// console.log(course.courseInstructor);

const {courseInstructor: Instructor, price, courseName} =  course

// console.log(Instructor);

//In React we practice desctructuring

const navbar = ({courseInstructors,  price, courseName }) =>{
    console.log( courseName);
}

// navbar()


//JSON

// {
//     "name":"brij";
//     "email":"brij@test.com"
// }

[
    {},
    {},
    {}
]