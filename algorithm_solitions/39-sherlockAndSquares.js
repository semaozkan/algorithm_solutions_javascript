function squares(a, b) {
    
    let squareRootA = Math.ceil(Math.sqrt(a))
    let squareRootB = Math.floor(Math.sqrt(b))
    
    return squareRootB - squareRootA + 1

}