const arr = [1,2,3,4,5]

function reverseArr(str){
    let rever = []
    for(let i=arr.length-1; i>=0 ; i--){
       rever +=arr[i]
    }
    return rever
}
console.log(reverseArr(arr))