function birthdayCakeCandles(candles) {
    let n = candles.length;
    let sum = 1;
    let siraliCandles = candles.sort((a, b) => b - a);
    for(let i=1; i<=n; i++){
        if(siraliCandles[i] == siraliCandles[0]){
            sum += 1;
        }
    }
    
    return sum;
    
}