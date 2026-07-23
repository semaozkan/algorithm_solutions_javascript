function saveThePrisoner(n, m, s) {
    
    let res = (s + m - 1) % n
    
    if(res == 0){
        return n
    }else{
        return res
    }

}
