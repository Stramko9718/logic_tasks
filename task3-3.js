"use strict"

function delDublicate(arr){

    const unic = new Set();

    for(let i =0; i<arr.length; i++){


        if (unic.has(arr[i].id)){
            arr.splice(i,1)
            i--

        }

        unic.add(arr[i].id)

    }

    return arr

};
