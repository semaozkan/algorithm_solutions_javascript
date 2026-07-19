function hurdleRace(k, height) {
    
    const maxHurdle = Math.max(...height)
    
    if(k < maxHurdle){
        return maxHurdle - k
    }else{
        return 0
    }

}