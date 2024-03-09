// // problem 1 add a number entered by a user to a already existing array.
// let array = [ 12, 32, 24, 235, 234];
// let num = prompt("Enter a number: ");
// num = Number.parseInt(num);
// array.push(num);
// console.log(array)

//Problem2 
// let array2 = [ 12, 32, 24, 235, 234];
// let num2 = prompt("Enter a number: ");
// num = Number.parseInt(num2);
//  while(num2 != 0)
//  {
// if(num2 != 0){
//     array2.push(num2)
// }
// else{
//     console.log("0 entered exiting the push operation.")
// }
//  }
// // console.log(array2)
// let array2 = [23, 43, 54, 46, 42]
// let num2;
// do{
//     num2 = prompt("Enter a number: ");
//     num2 = Number.parseInt(num2);
//     array2.push(num2);
// }while(num2 != 0);
// console.log(array2);

// // way2
// let array3 = [43, 4,64, 34, 353];                               // 0 can't even be added once using this way.
// let num3;
// while(num3 != 0){
//     num3 = prompt("Enter a number: ");
//     num3 = Number.parseInt(num3);
//     array3.push(num3);
// }
// console.log(array3)

//problem 3 
// Filter the numbers from a given array that are divisible by 10
let array = [23, 343, 20, 40, 50, 545, 820];
let arr10 = array.filter((a) => {
    return (a % 10 == 0);
})
console.log(arr10);

//Problem 4 
// Square the given array
let arr1 = [3, 54, 33, 32]

let arr2 = arr1.map((ele)=>{
    return ele*ele;
})
console.log(arr2);
console.log(typeof arr1[2])

//Problem 5
// calculate factorial using the reduce method;
let natural_array = [ 1,2,3,4,5];
let arr3 = natural_array.reduce((a1, a2) => {
    return a1*a2 ;
})
console.log(arr3)