function organizingContainers(container) {

    const rowSums = container.map(row => row.reduce((acc, val) => acc + val, 0))
    const colSums = container.map((_, colIndex) => 
    container.reduce((sum, row) => sum + row[colIndex], 0))
            
    rowSums.sort((a , b) => a - b)
    colSums.sort((a , b) => a - b)
        
    const isPossible = rowSums.every((capacity, index) => capacity === colSums[index])
    
    return isPossible ? "Possible" : "Impossible";

}