// ! negação (not); && conjunção (and); || disjunção (or)

console.log('NOT') // inverso
console.log(! true)
console.log(! false)

console.log('AND') // pra ser true os dois precisam ser true
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log('OR') // pra ser true só um precisa ser true
console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

console.log('EXEMPLOS PRÁTICOS')
var a = 5
var b = 8
console.log(a>b && b%2==0)// false && true
console.log(a<=b || b/2==2)// true && false

// ordem de precedência: not => and => or

// ordem de precedência dos operadores: aritméticos => relacionais => lógicos