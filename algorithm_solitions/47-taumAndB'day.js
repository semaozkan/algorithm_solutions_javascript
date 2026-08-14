function taumBday(b, w, bc, wc, z) {
    
    [b, w, bc, wc, z] = [b, w, bc, wc, z].map(BigInt)
    
    let blackPrice = bc < wc + z ? bc : wc + z
    
    let whitePrice = wc < bc + z ? wc : bc + z
    
    return (b * blackPrice) + (w * whitePrice)

}