let num = [4, 5, 2, 1]

console.log(`${num.length} posições`)
console.log(num)

num.push(7)

console.log(`${num.length} posições`)
console.log(num)

console.log('Ordem crescente')
console.log(num.sort())

console.log('Valores do Vetor')
for (var c = 0; c < num.length; c ++) {
    console.log(num[c])
}

console.log('Valores do Vetor (Outra maneira)')
for (var n in num) {
    console.log(num[n])
}

posicao = num.indexOf(4)
if (posicao == -1) {
    console.log(`O número não está no vetor`)
} else {
    console.log(`O número está na posição: ${posicao}`)
}
// retornar -1 significa que não encontrou o número