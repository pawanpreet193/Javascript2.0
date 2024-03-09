let array = [1,43, 53 ,54,34, 64];
console.log(array)
let a = array.join(" and ")
console.log(a)                     //returns a string 
array.forEach((ele)=>{
    console.log(ele);
})
//Arary.from converts a non array data into array

let data = 'This is a great day'
let arr = Array.from(data);
console.log(arr)

//for of loop
for(let i of array){
    console.log(i);
}

//for in loop
for(let i in array){
    console.log(i)                     //will print keys of the values as an array is actually a object in JavaScript
}

for(let i in array){
    console.log(array[i])
}