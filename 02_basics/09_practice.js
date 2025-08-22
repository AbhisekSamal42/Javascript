/* (Q1) We are given array of marks of students. Filter our of the marks of students that scored 90+.*/

let marks = [85,88,56,67,90,91,98]

let maxNum = marks.filter((val) =>{
    return val >= 90;
});
console.log(maxNum);

/* (Q2) Take a number n as input from user. Create an array of numbers from 1 to n.
Use the reduce method to calculate sum of all numbers in the array.
*/ 

let nums = [1,3,4,5,6,7]

const sum = nums.reduce((prev,curr) => {
    return prev+curr;
});
console.log(sum);

/*
Use the reduce method to calculate product of all numbers in the array.
*/

const num = [1,2,3,4,5]

const mul = num.reduce((prev,curr)=>{
    return prev * curr;
})
console.log(mul);



