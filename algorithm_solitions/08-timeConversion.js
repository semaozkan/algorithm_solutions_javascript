function timeConversion(s) {
    let time = s.split(":")
    if(s.includes("PM")== true){
        if(time[0] == "12"){
            s = s.replace("PM","")
        }else{
            time[0] = parseInt(time[0]) + 12
            time[2] = time[2].replace("PM","")
            s = time.join(":")
        }
        
    }else{
        if(time[0] == "12"){
            time[0] = "00"
            time[2] = time[2].replace("AM", "")
            s = time.join(":")
        }else{
            s = s.replace("AM","")
        }
        
    }
    
    return s;
    
}