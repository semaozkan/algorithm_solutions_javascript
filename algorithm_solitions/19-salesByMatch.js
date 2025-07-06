function sockMerchant(n, ar) {
    let count = 0
    
    let sortedArray = ar.sort((a, b) => a - b)
    
    for(let i=0; i<n; i++){
        if(sortedArray[i] == sortedArray[i+1]){
            count += 1
            i++
        }
    }
    
    return count;
}