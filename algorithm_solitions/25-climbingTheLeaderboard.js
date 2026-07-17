function climbingLeaderboard(ranked, player) {
    const newRanked = [...new Set(ranked)]
    
    let sonuc = []
    
    let j = newRanked.length-1
    
    for(let i=0; i<player.length; i++){
        while(j>=0 && player[i]>=newRanked[j]){
            j--
        }
        sonuc.push(j+2)
    }
    
    return(sonuc)
    
}