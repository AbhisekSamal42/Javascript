/*
-> Perform some operation and reduces the array to single value.
-> It return the single value.
*/

let arr = [2,3,4,5,6,7,8]

const sum = arr.reduce((res,curr) =>{
    return res+curr;
});
console.log(sum);

// WAP to find out the maximum number in the array by using the reduce method.

let mks = [56,76,89,23,45,565,784,98765]
let large = mks.reduce((prev,curr) =>{
    return prev > curr ? prev : curr;
})
console.log(large);
