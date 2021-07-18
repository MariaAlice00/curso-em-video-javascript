function calcularMedia(){
    let nome = window.prompt('Qual é o nome do aluno?')    
    let notaUm = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    let notaDois = Number(window.prompt(`Além de ${notaUm}, qual foi a outra nota de ${nome}?`))
    let media = (notaUm + notaDois) / 2

    let mensagem
    if (media >= 6) {
        mensagem = 'Meus parabéns!'
    } else {
        mensagem = 'Estude um pouco mais!'
    }

    let resultado = document.getElementById('res')

    resultado.innerHTML = `
    <p>Calculando a média final de <mark>${nome}</mark>.</p>
    ` 
    resultado.innerHTML += `
    <p>As notas obtidas foram <mark>${notaUm} e ${notaDois}</mark>.</p>
    `
    resultado.innerHTML += `
    <p>A média final será <mark>${media.toFixed(1)}</mark>.</p>
    `
    resultado.innerHTML += `
    <p>A mensagem que temos é: <strong style='color:red;'>${mensagem}</strong></p>
    `
}

