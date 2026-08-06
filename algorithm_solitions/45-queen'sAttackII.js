function queensAttack(n, k, r_q, c_q, obstacles) {
    
    let up = n - r_q
    let down = r_q - 1
    let right = n - c_q
    let left = c_q - 1
    let rightUp = Math.min(n - r_q, n - c_q)
    let leftUp = Math.min(n - r_q, c_q - 1)
    let rightDown = Math.min(n - c_q, r_q - 1)
    let leftDown = Math.min(c_q - 1, r_q - 1)
    
    
    for(let i = 0; i < k; i++){
        let r_o = obstacles[i][0]
        let c_o = obstacles[i][1]
        
        if(c_o === c_q){
            if(r_o > r_q){
                up = Math.min(up, r_o - r_q -1)
            }else{
                down = Math.min(down, r_q - r_o - 1)
            }
        }else if(r_o === r_q){
            if(c_o > c_q){
                right = Math.min(right, c_o - c_q - 1)
            }else{
                left = Math.min(right, c_q - c_o - 1)
            }
        }else if(Math.abs(r_o - r_q) === Math.abs(c_o - c_q)){
            let dist = Math.abs(r_o - r_q) -1
            
            if (r_o > r_q && c_o > c_q) {
                rightUp = Math.min(rightUp, dist);
            } else if (r_o > r_q && c_o < c_q) {
                leftUp = Math.min(leftUp, dist);
            } else if (r_o < r_q && c_o > c_q) {
                rightDown = Math.min(rightDown, dist);
            } else if (r_o < r_q && c_o < c_q) {
                leftDown = Math.min(leftDown, dist);
            }
        }
    }
    
    let total = up + down + right + left + rightUp + leftUp + rightDown + leftDown
    
    return total
    
}