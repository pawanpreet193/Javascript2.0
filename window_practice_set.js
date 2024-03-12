//Problem 1
let age = prompt("Enter your age")
age = Number.parseInt(age);
if(age >= 18){
    alert("You can drive");
}
else{
    alert("You cannot drive");
}


// Problem 2 
// Repeated prompts
let repeat = true;
while(repeat){
repeat = confirm( "Do you want to continue? ")
if (repeat) {
prompt( "Enter a valid email address");}
else{
alert("You need to login fast")}}

// Problem 4
let num;
num = prompt("Enter a number:")
num = Number.parseInt(num);
if(num > 10){
    location.href="https://www.youtube.com/watch?v=HzWhsTl10mw&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=29"
}