function contador() {
    let saida = document.getElementById('saida')
    let valorInicial = Number(document.getElementById('valorInicial').value)
    let valorFinal = Number(document.getElementById('valorFinal').value)

    saida.innerHTML += `<h2>Contando de ${valorInicial} até ${valorFinal}<h2>`

    if (valorInicial < valorFinal) {
        for (let i = valorInicial; i <= valorFinal; i++) {
            saida.innerHTML += `${i} &#x1F449; `
        }
    }
    else if (valorInicial > valorFinal) {
        for (let i = valorInicial; i >= valorFinal; i--) {
            saida.innerHTML += `${i} &#x1F449; `
        }
    }
    else {
        saida.innerHTML += 'Não é possível contar, pois os números são iguais.'
    }
    
    saida.innerHTML += ` &#x1F3C1;`
}
