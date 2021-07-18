function gerarNumeros(){
    let numeroAleatorio = Math.floor(Math.random() * 100) + 1

    let resultado = document.getElementById('res')

    resultado.innerHTML += `
    <p>Acabei de pensar no número <mark>${numeroAleatorio}</mark>!</p>
    ` 
}

function limpar() {
    let resultado = document.getElementById('res')

    resultado.innerHTML = ''
}