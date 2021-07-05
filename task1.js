"use strict"
function maxAndMin(arr){
    let obj = {
        max: 0,
        min: 0
    }
    let count_max = 0;
    let count_min = 0;

    for(let i=0; i<arr.length; i++){

        for(let j = 0; j<arr.length; j++){

            if(arr[i] >= arr[j]){
            count_max ++;
            }

            if(arr[i] <= arr[j]){
                count_min++
            }

        };

            if(count_min == arr.length){
                obj.min = arr[i]
            }

            if(count_max == arr.length){
                obj.max = arr[i]
            }

            count_max = 0;
            count_min =0;

    }
        return obj
};

console.log(maxAndMin([1,2,-6,4,5,2,0,10]))