function verificar(){
    let nome = prompt('Qual é o nome do aluno?')
    let nota1 = Number(prompt(`Primeira nota de ${nome}:`))
    let nota2 = Number(prompt(`Segunda nota de ${nome}:`))

    let resultado = document.getElementById('res')
    let media = (nota1 + nota2) / 2

    res.innerHTML = `
    <h2>Analisando a situação de ${nome}</h2>
    <p>Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}</strong></p>
    `

    if (media >= 6) {
        res.innerHTML += `
        <p>Com média acima de 6,0, o aluno está <mark style="background-color: #A3E897; font-weight: bold; color: #377D21;">APROVADO</mark></p>
        `
    } else if (media >= 3 && media < 6) {
        res.innerHTML += `
        <p>Com média entre 3 e 6, o aluno está em <mark style="background-color: #E9D3AC; font-weight: bold; color: #C68D51;">RECUPERAÇÃO</mark></p>
        `
    } else {
        res.innerHTML += `
        <p>Com média abaixo de 3, o aluno está <mark style="background-color: #E28783; font-weight: bold; color: #7F180B;">REPROVADO</mark></p>
        `
    }
    
}