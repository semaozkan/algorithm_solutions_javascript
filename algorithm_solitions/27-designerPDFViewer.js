function designerPdfViewer(h, word) {
    
    const wordArray = [...word]
    
    let maxHeight = 0
    
    for(const char of word){
        const index = char.charCodeAt(0) - 97
        
        let currentHeight = h[index]
        
        if(currentHeight > maxHeight){
            maxHeight = currentHeight
        }
    }
    
    return maxHeight * wordArray.length
    
}