/* -> It is an array method . It run a function once 
for every element in the array .
-> It does not return new array.
 */

let fruits = ['Abhisek', 'Banana', 'Mango'];
fruits.forEach(function(item){
    console.log(item);
});

// For a given array of numbers, print the square of each value using the forEach loop.

let num = [1,2,3,4,5,6]

num.forEach(function(num){
    console.log(num*num);
});
