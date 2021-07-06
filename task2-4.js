"use strict"

function makeStr (){

    let newStr = " ";
    
    return function(str){   

        if(str == undefined){
            return newStr
        }    

            return newStr = newStr + str;
    };
};

const concat =  makeStr ();
concat("abc");
concat("bca 1");
concat("finish");
console.log(concat())