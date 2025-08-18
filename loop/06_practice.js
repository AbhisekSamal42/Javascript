/* (Q1) Print all the number from 0 to 100.*/

for (let i =1 ; i<=100 ; i++){
    console.log(i)
}

/* (Q2) Print all the even number from 0 to 100.*/

for (let num = 1 ; num<=100 ; num++){
    if(num%2===0){
        console.log(`${num} are Even number`);
    }
    else{
        console.log("Odd number");
    }
}

/* (Q3) Create a game where you start with any random game num.
 Ask the user to keep guessing the game number until the user enters correct value.
*/

let gameNum = 50 ;
let UserNum = prompt("Enter a number : ");
while (UserNum != gameNum){
    UserNum = prompt("You entered wrong number. Guess again : ")
}
console.log("Congratulations, you entered the right number");

