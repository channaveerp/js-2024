let arr = [5, 4, 9, 8];

function SecMinAndSecMax(arr) {
    let min = Infinity;
    let secMin = Infinity;
    let max = -Infinity;
    let secMax = -Infinity;

    for(let i=0; i<arr.length; i++){
        let value  = arr[i]

        // find min ,& update secmin
       if(value <min){
        secMin = min;
        min = value
       }
       else if(value < secMin && value !==min){
        secMin = value
       }

       if(value >max){
        secMax = max;
        max = value
       }
       else if(value > secMax && value !==max){
        secMax = value
       }
        
    }
    return [secMax,secMin]
}

console.log(SecMinAndSecMax(arr))
