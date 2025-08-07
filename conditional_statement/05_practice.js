// Q(1) Get user to input a number and check the number is a multiple of 5 or not. 

let num = 55;
if (num % 5 === 0){
    console.log(`Number ${num} is multiple of 5.`);
}else{
    console.log(`Number ${num} is not multiple of 5.`);  
}

// Q(2) Write a code which can give grades to students according to their scores.
    // 90-100(A),70-89(B),60-69(C),50-59(D),0-49(F)

let score = 40 ;
if (score>=90 && score<=100){
    console.log("The student Grade is A");
}
else if (score>=70 && score<=89){
    console.log("The student Grade is B");
}
else if (score>=60 && score<=69){
    console.log("The student Grade is C");
}
else if (score>=50 && score<=59){
    console.log("The student grade is D");
}
else{
    console.log("The Student is FAIL");
    
}