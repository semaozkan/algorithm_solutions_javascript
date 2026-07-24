function circularArrayRotation(a, k, queries) {
    
    const arrayLength = a.length
    let rotation = k % arrayLength
    
    for(let i=1; i<=rotation; i++){
        let last = a.pop()
        a.unshift(last)
    }
    
    return queries.map(index => a[index])

}