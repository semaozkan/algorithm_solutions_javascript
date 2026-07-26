function extraLongFactorials(n) {
    
    let result = BigInt(1)
    
    for(let i = 1; i<=n; i++){
        result = result * BigInt(i)
    }
    
    console.log(String(result))

}