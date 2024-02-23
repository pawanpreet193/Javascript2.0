//Problem 1 
let obj = {
    "Harry" : 98,
    "Rohan" : 70,
    "Aakash" : 7
}

for( let a in obj){
    console.log("Marks scored by " + a + " " + obj[a]);
}

// let correct_number = 21;
// let user_number = prompt("Enter a number: ");
// while( user_number != correct_number){
//     console.log("Try Again");
// }

//Problem 2 
//Create a function to find the mean of five numbers 
function avg_of5(a, b, c, d,e ){
    return ((a+b+c+d+e)/5);
}
let a1 = 5
let a2 = 34
let a3 = 33
let a4 = 53
let a5 = 23
console.log(avg_of5(a1, a2, a3,a4,a5));
let b1 = 56
let b2 = 3
let b3 = 3
let b4 = 5
let b5 = 2
console.log(avg_of5(b1, b2, b3,b4,b5));
