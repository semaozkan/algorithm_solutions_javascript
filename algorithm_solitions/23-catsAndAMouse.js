function catAndMouse(x, y, z) {

    let distanceA = Math.abs(x-z)
    let distanceB = Math.abs(y-z)
    
    if(distanceA < distanceB){
        return "Cat A"
    }else if(distanceB < distanceA){
        return "Cat B"
    }else{
        return "Mouse C"
    }
}