
//  ADD two number.

function sum(x,y){
    console.log(x+y);
}
sum(2,3);

// ADD two number.(other way)

function add(x,y){
    let result = x + y;
    return result
}
let result = add(2,5);
console.log(result);


// 

function loginUser(Username){
    return `${Username} just logged in.`
}
console.log(loginUser("Abhisek"));


// By using rest operator we can pass multiple value in a function.

function calculateCartprice(...num1){
    return num1
}
console.log(calculateCartprice(200,300,400,5000));
