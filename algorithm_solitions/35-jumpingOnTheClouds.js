function jumpingOnClouds(c, k) {
    
    let energy = 100
    const n = c.length
    let i = 0
    
    do{
        i = (i + k) % n //% n Kullanımı: Son indeksi aşınca hata almamak ve dairesel olarak 0'a dönmek için kullandım
        
        energy--
        
        if(c[i] === 1){
            energy -= 2
        }
    }while(i !== 0)
    
    return energy

}