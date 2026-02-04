function getMoneySpent(keyboards, drives, b) {

    let maxValue = -1
    
    for(let keyboard of keyboards){
        for(let drive of drives ){      
          let sum = keyboard + drive
          if(sum > maxValue && sum <= b){
            maxValue = sum
          }
        }
    }
    return maxValue
}