function contador() {
    let saida = document.getElementById('saida')
    let valor = Number(document.getElementById('labelValor').value)

    saida.innerHTML += `<h2>Contando de 0 até ${valor}<h2>`

    for (let i = 0; i <= valor; i++) {
        saida.innerHTML += `${i} &#x1F449; `
    }
    
    saida.innerHTML += ` &#x1F3C1;`
}
