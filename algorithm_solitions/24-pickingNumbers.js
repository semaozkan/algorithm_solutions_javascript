function pickingNumbers(a) {

    a.sort((x,y) => y-x)
    
    let res = [a[0]]
    let maxLength = 0
    let x = 0
    
    for(let i=1; i<a.length; i++){
        if(a[x] - a[i] <= 1){
            res.push(a[i])
        }else{ 
            if(maxLength < res.length){
                maxLength = res.length
            }
            x += 1
            i = x
            res = [a[i]];
        }
    }
    
    if (res.length > maxLength) {
        maxLength = res.length;
    }
    
    return maxLength
    
}