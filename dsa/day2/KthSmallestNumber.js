let Arr = [7, 10, 4, 3, 20, 15]
let k = 4

function KthSmallestElement(Arr,k){
    // using sort 
//     const sortedArr  = Arr.sort((a,b)=>a-b)
// console.log(sortedArr)
//     return sortedArr[k-1]

//  without sort
// with i- also works but it
//  effect in optimizeation of performace sorted element will not chck again once i loop eis comepltingn 

for(let i=0 ; i<Arr.length-1; i++){
    for(j=0; j<Arr.length-i-1; j++){
        if(Arr[j]>Arr[j+1]){
            let temp = Arr[j]
            Arr[j] = Arr[j+1]
            Arr[j+1]=temp 
        }
    }
}
return Arr[k-1]
}
console.log(KthSmallestElement(Arr,k))