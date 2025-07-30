// ******** Conversion *********

let score = "33acc"

console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0


let isLogged = "abhisek"
let booleanIsLogged = Boolean(isLogged)
console.log(booleanIsLogged)

// 1 => true; 0 => false ; "" => false ; "abhise" => true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);


// ******** operation *********

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);

let str1 = "hello"
let str2 = " Abhisek"
let str3 = str1+str2
console.log(str3);

console.log("1" + 2);
console.log(1 +  "2");
console.log("1" + 2 + 2);
console.log(1+2+"2");
console.log("1"+"2");


console.log(+true);
console.log(+"");



let gameCounter1 = 200
gameCounter1++;
console.log(gameCounter1);

let gameCounter = 200
++gameCounter;
console.log(gameCounter);









