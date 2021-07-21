function parImpar(n) {
    if (n % 2 == 0) {
        return 'PAR!'
    } else {
        return 'ÍMPAR!'
    }
}

let num = parImpar(101)
console.log(num)