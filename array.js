let array = [345, 'Hello', 45, 'good', 84597]
console.log(array);

array[2] = 'Edited'
console.log(array)            //array are mutuable, can be changed after 
console.log(typeof array)
let arr = '';
for(let i = 0; i < array.length; i++){
    arr += array[i]
}
console.log(arr, " ");
array.toString();
console.log(typeof array);
console.log(array);
let line = array.join("-");
console.log(line)
array.pop();
console.log(array);
array.push(657)
console.log(array)
delete array[3]
console.log(array)
let a1 = ['a', 432, 'd', 322];
let a2 = ['cv', 2, 'do']
let line2  = a1.concat(a2)
console.log(line2)
let array2 = ['a', 'd', 'car', 'x', 's']
array2.sort();                          //will sort an array in ascending order 
console.log(array2)
console.log(array)
array.sort();
console.log(array)
let array3 = [345, 'Hello', 45, 'good', 84597]
array3.sort();
console.log(array3);

//sort numbers using sort

let compare = (a,b)=>{
    return b-a;
}
let num_array = [323, 242, 424,22,42]
num_array.sort(compare);
console.log(num_array)
num_array.splice(3, 1, 'Harry', 'Vaibhav','helo');
console.log(num_array)
let line3 = num_array.slice(4); // returns the deleted elements
console.log(num_array.slice(3))