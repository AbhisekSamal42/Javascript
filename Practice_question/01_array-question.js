/* (Q1) By using for loop print all the heros name from the array. */

let Myhero = ['ShreeRam','Hanuman', 'Hari', 'Krishna', 'Shiva']

for (let idx = 0 ; idx<Myhero.length ; idx++){
    console.log(Myhero[idx]);
}

/* (Q2) By using for-of loop print all the heros name from the array. */

let citys = ['BBSR','Cuttack','Jajpur','MKG'];
for (let i of citys){
    console.log(i);
}

/* (Q3) For a given array with marks of student -> [85,97,44,37,76,60]
find the avg. marks of the entire class. */

let marks = [85,97,44,37,76,60]
let sum = 0;

for (let val of marks){
    sum = sum+val;
}
let avg = sum / marks.length;
console.log(`Average mark of the entire class is ${avg}`);

/* (Q4) for a given array with prices of 5 items -> [250,645,300,900,50]. all items have an offer on them.
change the array to store final price after applying offer.*/

let prices = [250,645,300,900,50] ;

for (let i = 0; i<prices.length; i++){
    let offer = prices[i] / 10;
    prices[i] = prices[i] - offer;
}
console.log(prices);
