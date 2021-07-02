function checkSort(arr){
    let count = 0;
    for(let i = 0; i<arr.length-1; i++){
        for (let j=i+1; j<arr.length; j++){
            if(arr[i] <= arr[j]){
                count++;
            }
        }
        if(count != arr.length-1){
            return false;
        }
        count = i+1;
    }
    return true;
}

console.log(checkSort([-2,0,0,1,2,3,3,5]))