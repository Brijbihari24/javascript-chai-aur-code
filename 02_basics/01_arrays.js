// arrays

const arr1 = [0, 1, 2, 3, 4, 5];

console.log(arr1);

// another method to fine array

const arr2 = new Array(1, 4, 23, 765, 8, 4)
// console.log(arr2);

// console.log(arr2[3]);

// array methods

// arr1.push(6)
// arr1.push(7)
// arr1.pop()

// arr1.unshift(9)
// arr1.shift()


// console.log(arr1.includes(9));
// console.log(arr1.indexOf(5));

const newArr = arr1.join()
// console.log(arr1);
// console.log(typeof newArr);


// slice, splice

console.log("A", arr1);

const myn1 =  arr1.slice(1,3)
console.log(myn1);

console.log("B", arr1);


const myn2 =  arr1.splice(1,4)
console.log(myn2);

console.log("C",arr1);


