//this keyword and arrows function

const user = {
    username: "brij",
    price: 999,
    welcomeMessage: function () {
        return (
            console.log(`${this.username}, welcome to website`)
            // console.log(this)
        )
    }
}

user.welcomeMessage()
// user.username =  "sam"
// user.welcomeMessage()

// console.log(this)

//1st way do decalre a function
// function chai(){
//     let username  = "brij"

//     // this can only access objects not normal variables
//     console.log(this.username);
// }

// chai()


//2nd way to decalre a fucntion
// const chai = function(){
//     let username  = "brij"
//     console.log(this.username);
// }

// chai()

//3rd way to declare a function
// const chai = () => {
//     let username = "brij"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }

// we can write the above arrow function in this way also and we call it implisit function
// const addTwo = (num1, num2)=> num1 + num2

//3rd way arrow fucntion as implisit function
// const addTwo = (num1, num2)=> (num1 + num2)


const addTwo = (num1, num2)=> ({username: "brij"})

console.log(addTwo(3, 56));
  


