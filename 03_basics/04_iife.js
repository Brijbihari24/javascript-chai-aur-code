// Immediately Invoked Function Expressions (IIFE)


//Normal Function
// function chai() {
//     console.log("chai is ready");
// }

// chai()

// we use iife functions to prptect our function from getting polluted by global scope values
(function chai() {
    console.log("chai is ready");
}
)();

//if you want to execute another iffe function then always always write ;(semicolons) after the function

// (function coffee() {
//     console.log("coffee is ready");
// }
// )()

(
    (name)=>{
        console.log(`${name} your chai is ready`);
    }
)('brij')