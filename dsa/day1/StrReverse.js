const str = "channa"

function isStrRev(){
    let rever = ""
    for(let i=str.length-1; i>=0;i--){
        rever += str[i]
    }
    return rever
}
console.log(isStrRev(str))
//annahc