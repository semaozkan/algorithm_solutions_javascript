function beautifulDays(i, j, k) {
    
    let beautifulDayCount = 0
    
    for(i; i<=j; i++){
        let reverseText = i.toString().split('').reverse().join('')
        let reverseNumber = Number(reverseText)
        
        let dif = Math.abs(i - reverseNumber)
        
        if(dif % k === 0){
            beautifulDayCount++
        }
    }
    
    return beautifulDayCount

}