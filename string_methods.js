let stu_name = "Pawanpreet singh 1"
console.log(stu_name.length)
console.log(stu_name.toUpperCase())
console.log(stu_name.toLowerCase())
console.log(stu_name.slice(11));
console.log(stu_name.replace("1","PPS"));
let college = "GNDEC"
console.log(stu_name.concat(" is a engineering student in ", college));
let stu1_name = "     Mohit  "
console.log(stu1_name.trim());
console.log(stu1_name);
let new_string = '';
//for loop for printing a string on console
for( let i = 0; i < (stu_name.length); i++){
    new_string += stu_name[i];
}
console.log(new_string);

let data = "This is a apple";
let result = '';
for(let i = 0; i < (data.length); i++){
    result += data[i];
}
console.log(result);
let sentence = "This is a great day."
index = 5;
console.log(`The character at ${index} is ${sentence.at(index)}`);
console.log(`The character at ${sentence.charCodeAt(index)} is equals to ${sentence.charAt(index)}`)
let feeling = "Exited! ";
console.log(`Today is a great day. I am very ${feeling.repeat(3)}`);
console.log("hello\"".length);

//practice set
let line = "What is true will stay true, no matter what";
let detect = "pawan";
console.log(` ${detect} ${line.includes(detect)? 'is' : 'is not' } in the sentence`)
console.log(line.startsWith('What'));