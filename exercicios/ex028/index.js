function fatorial() {
    let saida = document.getElementById('saida')
    let numero = Number(document.getElementById('numero').value)

    saida.innerHTML = `<h2>Calculando ${numero}!<h2>`

    let fatorial = 1
    for (let i = numero; i > 1; i--) {
        saida.innerHTML += `${i} x `
        fatorial *= i
    }
    saida.innerHTML += `1 = <strong>${fatorial.toLocaleString('pt-BR')}</strong> `
}
