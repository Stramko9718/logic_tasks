"use strict"

function factorial(n){

    if (n > 0){
        return n * factorial(n-1);
    }
    
    else if(n < 0){
       return "Enter a positive number!!!"
    }

    else{
        return 1;
    }

};

console.log(factorial(0));
console.log(factorial(6));
console.log(factorial(-3));