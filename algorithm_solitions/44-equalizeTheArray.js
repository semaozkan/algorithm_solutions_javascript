function equalizeArray(arr) {
    
    arr.sort((a,b) => a-b)
    
    let count = 1
    let countArr = []
    
    for(let i = 1; i<arr.length; i++){
        if(arr[i] == arr[i - 1]){
            count++
        }else{
            countArr.push(count)
            count = 1
        }
    }
    
    countArr.push(count)
    
    let maxCount = Math.max(...countArr)
    
    return arr.length - maxCount
}