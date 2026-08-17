function encryption(s) {
    
    let joinedText = s.replaceAll(" ", "")
    
    let sLength = joinedText.length
    
    let rows = Math.floor(Math.sqrt(sLength))
    let cols = Math.ceil(Math.sqrt(sLength))
    
    if (rows * cols < sLength) {
        rows++;
    }
    
    const encryptedWords = [];
    
    for(let c = 0; c < cols; c++){
        let word = ""
        for(let i = c; i < sLength; i += cols){
            word += joinedText[i]
        }
        encryptedWords.push(word)
    }
    
    return encryptedWords.join(" ")
}