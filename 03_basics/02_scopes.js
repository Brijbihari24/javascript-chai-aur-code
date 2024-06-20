//scope

//Global Scope and Block Scope

// this variable is under global scope 
var c = 300;

let a = 200;

if (true) {
    // now these variables are under block scope 
    let a = 10;
    const b = 20;

    // var creates scoping problem in js
    // var c  = 30;
    c = 30;

    // console.log("INNER :", a);
}

// console.log(a);
// console.log(b);
// console.log(c);


// scope level and mini-hoisting

function one() {
    const username = "brij";
    function two() {
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);

    two()
}

one()

if(true){
    const username = "brij";
    if(username == "brij"){
        const website  = "youtube"
        // console.log(username + website);
    }

    // console.log(website);

}

// console.log(username);


// ++++++++++++++++++++++++++++++++++ intresting

console.log(addOne(5));
function addOne(num){
    return num + 1
}


console.log(addTwo(5));
 const addTwo =  function(num){
    return num + 2
}

