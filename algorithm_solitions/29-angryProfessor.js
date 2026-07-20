function angryProfessor(k, a) {
   
    const onTimeCount = a.filter(time => time <= 0).length

    return onTimeCount < k ? "YES" : "NO"

}