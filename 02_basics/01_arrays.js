// This two are the old way to create an array

const arr = [0,1,2,3,4,5]
const Myhero = ['ShreeRam','Hanuman']

// console.log(arr[0])
// console.log(Myhero[1])

// This is new way to create an array

const newArr = new Array(1,2,34)

// console.log(newArr[2])


// Mehods in Array

arr.push(6);
arr.pop();
arr.unshift(9);
arr.shift();
console.log(arr.includes(9));
const arr1 = [1,2,3,4,5]
console.log(arr1.indexOf(4));
// console.log(arr);

const Newarr = arr.join() // this method is used to convert the array in to string.
console.log(arr);
console.log(Newarr);

// slice and splice method in array

console.log("A ",arr);

const myn1 = arr.slice(1,3)
console.log(myn1);
console.log("B ",arr);

const myn2 = arr.splice(1,3)
console.log(myn2);
console.log("C ",arr);
