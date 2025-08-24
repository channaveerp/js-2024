 const nums = [1,2,2,3,3,3,4];
 const k = 2;
function topKFrequentElement(nums,k){

    let map = {}
    const arr = []
    //creating map object
    for(let num of nums){
        map[num] = (map[num]||0)+1
    }

    return Object.keys(map).filter(num=>map[num]>=k)

}
console.log('ggg');

console.log(topKFrequentElement(nums,k))
