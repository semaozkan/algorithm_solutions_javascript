function findDigits(n) {
        
    let numbers = n.toString().split('').map(Number)
    let count = 0
    
    for(const number of numbers){
        if(number !== 0 && n % number == 0){
            count++
        }
    }
    
    return count
}