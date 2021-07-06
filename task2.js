"use strict"

function sum(n){

    if ( n > 0){
        return n + sum(n-1);
    }

    else if(n < 0){
        return n + sum(n+1);
    }

    else{
        return 0;
    }
}

console.log(sum(0));
console.log(sum(6));
console.log(sum(-3));