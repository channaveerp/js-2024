const str  = ["act","pots","tops","cat","stop","hat"]

function groupAnagram(str){
    let map ={}
    for(let i=0; i<str.length; i++){
    //  step 1 > make each string as sorted one 
    const sortedStr = str[i].split("").sort().join("")
    //step 2  make them group sorted str
    if(!map[sortedStr]){
        map[sortedStr] = []
    }
    map[sortedStr].push(str[i])
    }
    return Object.values(map)
}
console.log(groupAnagram(str));
