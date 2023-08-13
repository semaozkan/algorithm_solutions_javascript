function diagonalDifference(arr) {
    let n = arr.length
    let sum1 = 0;
    let sum2 = 0;
    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            if(i==j){
                sum1 += arr[i][j];
            }
            if(i + j == n - 1){
                sum2 += arr[i][j]
            }
            
        }      
    }
    return Math.abs(sum1-sum2);  

}