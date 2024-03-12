let proceed = true
while(proceed){
const system_values = ["snake", "gun", "water"]
const randomVa1ues = Math.floor(Math.random()* system_values.length)
let system_choice = system_values[randomVa1ues];
console. log(system_choice) ;
const user_choice = prompt("Enter \'snake\', \'water\', \'gun\'")
if(user_choice == 'snake'){
    if(system_choice == 'snake'){
        alert("Its a draw");
    }
else if(system_choice == 'gun'){
    alert("User losses");
}
else if(system_choice== 'water'){
    alert("User wins");
}
    else{
        alert("INVALID CHOICE");
    }
}
else if(user_choice == 'water'){
    if(system_choice == 'snake'){
        alert("User Looses");
    }
else if(system_choice == 'gun'){
    alert("User wins");
}
else if(system_choice== 'water'){
    alert("Its a Draw");
}
    else{
        alert("INVALID CHOICE");
    }
}
else if(user_choice == 'gun' ){
    if(system_choice == 'snake'){
        alert("User wins");
    }
else if(system_choice == 'gun'){
    alert("Its a draw");
}
else if(system_choice== 'water'){
    alert("User losses");
}
    else{
        alert("INVALID CHOICE");
    }
}
else{
    alert("Invalid choice")
}
    proceed = confirm("Do you want to try again?");
}