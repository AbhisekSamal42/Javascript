// Stack Memory

/*
Stack Memory is Used in Primitive Datatype.
*/

// Example

let myYoutubename = "abhiseksamal"
let anothername = myYoutubename
anothername = "chaicode"

console.log(myYoutubename);
console.log(anothername);


// Heap

/*
Heap Memory is Used in Non-Primitive Datatype.
*/

// Example 

let userOne = {
    email : "samal@gmail.com",
    upi : "user@ybl"
}

let userTwo = userOne 

userTwo.email = "abhisek@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

