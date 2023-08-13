function staircase(n) {
    for(let i = 1; i<=n; i++){
        const space = " ".repeat(n-i)
        const hashes = "#".repeat(i)
        console.log(space + hashes)
    }
}