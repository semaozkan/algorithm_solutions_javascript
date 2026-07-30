function nonDivisibleSubset(k, s) {
    
    const counts = new Array(k).fill(0)
    
    for(let num of s){
        let remainder = num % k
        counts[remainder]++
    }
    
    let maxSize = 0
    
    if(counts[0] > 0){
        maxSize++
    }
    
    for(let i = 1; i < k/2; i++){
        maxSize += Math.max(counts[i], counts[k-i])
    }
    
    if(k % 2 == 0 && counts[k/2] > 0){
        maxSize++
    }
    
    return maxSize

}