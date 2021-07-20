function tabuada() {
    let saida = document.getElementById('saida')
    let numero = Number(document.getElementById('numero').value)

    saida.innerHTML = `<h2>Tabuada de ${numero}<h2>`

    for (let i = 1; i <= 10; i++) {
        saida.innerHTML += `${numero} x ${i} = <strong>${numero*i}</strong><br>`
    }
}
