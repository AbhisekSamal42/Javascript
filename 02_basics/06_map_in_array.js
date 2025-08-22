/*
-> Map method is an Array method.
-> It run a function once for Everu element in the Array.
-> It return a new Array.
*/

let arr = ['ram','sham','hari']
arr.map((name)=>{
    console.log(name);
})

// WAP to double the number present in the array by using Map method.

let num = [5,6,7]

let double = num.map((val)=>{
    return val*2;
});
console.log(double);

