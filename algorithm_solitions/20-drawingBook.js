function pageCount(n, p) {

    let front = Math.floor(p / 2)
    let back = (n % 2 == 0 && p % 2 ==! 0) ? Math.floor((n-p) / 2 + 1) : Math.floor((n - p) / 2)
    let min = Math.min(front, back)
    return min
}