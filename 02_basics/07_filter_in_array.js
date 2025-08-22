/*
-> Filter methid is an Array method.
-> It retirns a new array with elemt that pass a given condition.
-> it doesnot affect the oroginal array.
*/

let num = [1,2,3,4,5,6]
let even = num.filter((val)=>{
    return val % 2 === 0;
});
console.log(even);
