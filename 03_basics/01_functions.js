// functions

function addTwoNumbers(number1, number2) {

    //    const result = number1 +  number2

    //    return(result)

    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "Indira"){

    if(!username){
        console.log("Please enter username");
        return
    }
    return(
        `${username} is just loggedIn`
    )
}

// console.log(loginUserMessage());


// spread operator, rest operator

//rest operator - passing multiple values in the function
function calculateCardPrice(val1, val2,...num1){
    return num1
}

// console.log(calculateCardPrice(200, 400, 500, 2000));

//how to pass object in fucntion
const user ={
    username :"brij",
    age: 99,
}


// TODO: take a look at it later.
// function handleFunction(anyObject){
// return(
//     console.log(`hello I'm ${user.username}, and my age is ${user.age}`)
// )

// }
// handleFunction(user)

// how to pass array in function

const myNewArray =  [200, 400, 500, 2000]

function handleArray(anyArray){
    return(
        console.log(anyArray[1])
    )
}

// handleArray(myNewArray)
handleArray([200, 400, 500, 2000])