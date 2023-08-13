function plusMinus(arr) {
    let n = arr.length;
    let negativeNumber = 0;
    let positiveNumber = 0;
    let zero = 0;
    
    arr.forEach(number => {
        if(number<0){
            negativeNumber += 1
        }
        if(number>0){
            positiveNumber += 1
        }
        if(number == 0){
            zero += 1
        }
    })
    
    let positive = parseFloat((positiveNumber / n).toFixed(6))
    let negative = parseFloat((negativeNumber / n).toFixed(6))
    let zeros = parseFloat((zero / n).toFixed(6))
    
    console.log(positive);
    console.log(negative);
    console.log(zeros); 

}