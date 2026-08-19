function biggerIsGreater(w) {

    let wArr = w.split("")
    let pivot = -1
    
    for(let i = wArr.length-2; i>=0; i--){
        if(wArr[i] < wArr[i+1]){
            pivot = i
            break
        }
    }
    
    if(pivot == -1) return "no answer"
    
    for(let j = wArr.length-1; j>=0; j--){
            if(wArr[j] > wArr[pivot]){
                [wArr[pivot], wArr[j]] = [wArr[j], wArr[pivot]]
                break
            }
    }
    
    let left = pivot + 1
    let right = wArr.length-1
    
    while(left < right){
        [wArr[left], wArr[right]] = [wArr[right], wArr[left]]
        left++
        right--
    }
    
    return wArr.join("")  
}