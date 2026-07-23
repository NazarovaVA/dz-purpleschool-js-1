function sort(arr){
    lenArr = arr.length;
    for (let i = 0; i < lenArr; i++){
        for (let j = 0; j < lenArr - i - 1; j++){
            if (arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

arr = [1, 40, -5, 10, 0];
console.log(sort(arr));