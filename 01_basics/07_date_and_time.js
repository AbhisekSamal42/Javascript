let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate)

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());


let myCreatedDate1 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate1.toLocaleDateString());

let myCreatedDate2 = new Date("2023-01-26")
console.log(myCreatedDate2.toLocaleDateString());



// ************ Time ************

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.round(Date.now()/1000));


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getMonth());


