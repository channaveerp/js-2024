let arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6];

function MoveNegativeNumber(arr){
    for(let i=0; i<arr.length-1; i++){
        for(let j=0; j<arr.length-1; j++){
            if(arr[j] <0){
                let temp = arr[j]
                arr[j]  =arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}
console.log(MoveNegativeNumber(arr))