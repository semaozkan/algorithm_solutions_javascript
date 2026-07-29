function cutTheSticks(arr) {
    
    let resultArr = []
    
    let minVal = 0
    
    while(arr.length > 0){

        resultArr.push(arr.length)
        
        minVal = Math.min(...arr)
        
        arr = arr.map(value => value - minVal).filter(value => value > 0)
        
    }
    
    return resultArr
}