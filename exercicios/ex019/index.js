function calcular(){
    let numeroUm = Number(prompt('Primeiro valor:'))
    let numeroDois = Number(prompt('Segundo valor:'))
    let escolha = Number(prompt(`Valores informados: ${numeroUm} e ${numeroDois}.\nO que vamos fazer? \n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`))
    let resultado = document.getElementById('res')

    resultado.innerHTML = '<h2>Calculando...</h2>'

    switch(escolha) {
        case 1: 
            resultado.innerHTML += `${numeroUm} + ${numeroDois} = <strong>${numeroUm + numeroDois}</strong>`
            break
        case 2: 
            resultado.innerHTML += `${numeroUm} - ${numeroDois} = <strong>${numeroUm - numeroDois}</strong>`
            break
        case 3: 
            resultado.innerHTML += `${numeroUm} x ${numeroDois} = <strong>${numeroUm * numeroDois}</strong>`
            break
        case 4: 
            resultado.innerHTML += `${numeroUm} / ${numeroDois} = <strong>${numeroUm / numeroDois}</strong>`
            break
        default:
            resultado.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${numeroUm} e ${numeroDois}, mas não sei o que fazer com eles.`
            break
    }

}
