function advinhar(){
    let meuNumero = Number(window.prompt('Qual é o seu palpite?'))

    let numeroAleatorio = Math.floor(Math.random() * 100) + 1

    let resultado = document.getElementById('res')

    if (numeroAleatorio < meuNumero) {
        resultado.innerHTML += `
        <p>Você falou ${meuNumero}. Meu número é <strong>MENOR!</strong></p>
        `     
    } else if (numeroAleatorio > meuNumero) {
        resultado.innerHTML += `
        <p>Você falou ${meuNumero}. Meu número é <strong>MAIOR!</strong></p>
        `     

    } else if (numeroAleatorio == meuNumero) {
        resultado.innerHTML += `
        <p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${numeroAleatorio}!</p>
        `     
    }
}
