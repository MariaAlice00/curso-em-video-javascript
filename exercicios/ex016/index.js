function calcularIdade(){
    let anoNascimento = Number(window.prompt('Em que ano você nasceu?'))
    let dataAtual = new Date
    let anoAtual = dataAtual.getFullYear()

    let idade = anoAtual - anoNascimento

    let resultado = document.getElementById('res')

    resultado.innerHTML = `
    <p>Quem nasceu em ${anoNascimento} vai completar <strong>${idade}</strong> em ${anoAtual}.</p>
    ` 
}

