function compareTriplets(a, b) {
    
    let scoreA = 0
    let scoreB = 0
    if(a[0]>b[0]){
        scoreA += 1
    }else if(a[0]<b[0]){
        scoreB += 1
    }
    if(a[1]>b[1]){
        scoreA += 1
    }else if(a[1]<b[1]){
        scoreB += 1
    }
    if(a[2]>b[2]){
        scoreA += 1
    }else if(a[2]<b[2]){
        scoreB += 1
    }
    
    return [scoreA, scoreB]

}