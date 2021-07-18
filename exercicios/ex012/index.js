function maiorValor(){
    let numeroUm = Number(window.prompt('Digite um número:'))    
    let numeroDois = Number(window.prompt('Digite outro número:'))    
    
    let resultado = document.getElementById('res')

    if (numeroUm > numeroDois) {
        resultado.innerHTML = `
        <p>Analisando os valores <mark>${numeroUm}</mark> e <mark>${numeroDois}</mark>, o maior valor é <strong>${numeroUm}</strong></p>
        ` 
    } else if (numeroDois > numeroUm) {
        resultado.innerHTML = `
        <p>Analisando os valores <mark>${numeroUm}</mark> e <mark>${numeroDois}</mark>, o maior valor é <strong>${numeroDois}</strong></p>
        ` 
    } else if (numeroUm == numeroDois) {
        resultado.innerHTML = `
        <p>Os números são iguais! Coloque números diferentes!</p>
        ` 
    }
}

