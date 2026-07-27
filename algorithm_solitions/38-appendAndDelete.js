function appendAndDelete(s, t, k) {
    let sArray = s.split("")
    let tArray = t.split("")
    let count = 0
    let minLength = Math.min(s.length, t.length)
    
    for(let i = 0; i<minLength; i++){
        if(sArray[i] === tArray[i]){
            count++
        }else{
            break
        }
    }
    
    let sCount = s.length - count
    let tCount = t.length - count
    let dif = sCount + tCount
     
    if(dif < k && (k - dif) % 2 !== 0 && t.length + s.length > k){
        return "No"
    }else if(dif <= k){
        return "Yes"
    }else{
        return "No"
    }
    
}