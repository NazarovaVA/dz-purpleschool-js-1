function del(num){
    if (num > 9){
        return true;
    }
    return false;
}
function filter(arr,fn){
    const lenArr = arr.length;
    const goodArr = []
    for (let i = 0; i < lenArr; i++){
        const needDelete = fn(arr[i]);
        if (needDelete === false){
            goodArr.push(arr[i]);
        }
    }
    return goodArr;
}

arr = [3,6,2,10,365,235,1,5,2345,8,1030]
console.log(filter(arr,del))