function countingValleys(steps, path) {
    let valleyCount = 0
    let currentSeaLevel = 0
    let valleyStatus = false
    
    for(let step=0; step < steps; step++){
        path[step] === 'U' ? currentSeaLevel++ : currentSeaLevel--
        if(currentSeaLevel < 0 && !valleyStatus){
            valleyCount++
            valleyStatus = true
        }else if(currentSeaLevel >= 0 && valleyStatus){
            valleyStatus= false
        }
        
    }
    return valleyCount  
}