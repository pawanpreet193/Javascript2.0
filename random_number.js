//Guess a number
function random(min, max){
    return Math.floor(Math.random() * (max - min )+ min);
}

let guess = random(1,100)
console.log(guess)
let user_num ;
let count = 0;
while(guess != user_num){
    let user_num = prompt("Enter a number:")
    if(guess > user_num){
        console.log("Number entered by user is lesser than the random number.")
    }
    else if( guess < user_num){
        console.log("Number entered by the user is greater than the random number.")
    }
    else if (user_num = guess){
        console.log("Number is equal to random number.")
        break;
    }
    count++;
}

console.log("You took " + count + " attempts to guess.")
let score = 100 - count;
console.log("Your score is "+ score);