"use strict"

function delDublicate(arr){

    const unic = new Set();

    for(let i =0; i<arr.length; i++){

        unic.add(arr[i].id)

    }

    return unic

};

