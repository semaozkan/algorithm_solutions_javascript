function repeatedString(s, n) {
    
    let aCount = 0
    
    for(let i = 0; i < s.length; i++){
        if(s[i] == "a"){
            aCount++
        }
    }
    
    let sCount = Math.floor(n / s.length)
    
    let remainder = n % s.length
    
    let remainderA = 0
    
    for(let i = 0; i < remainder; i++){
        if(s[i] == "a"){
            remainderA++
        }
    }
    
    return aCount * sCount + remainderA

}