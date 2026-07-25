function permutationEquation(p) {
    
    let y = []
    
    for(let i = 1; i<=p.length; i++){
        let value = p.indexOf(p.indexOf(i) + 1) + 1
        y.push(value)
    }
    
    return y

}