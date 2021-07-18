function estacao(){
    let mes = prompt('Digite o mês em extenso (ex: Setembro)').toUpperCase()

    let resultado = document.getElementById('res')
    let estacaoCorrespondente

    if (mes == 'JANEIRO' || mes == 'FEVEREIRO' || mes == 'MARÇO') {
        estacaoCorrespondente = 'INVERNO'
    } else if (mes == 'ABRIL' || mes == 'MAIO' || mes == 'JUNHO') {
        estacaoCorrespondente = 'PRIMAVERA'
    } else if (mes == 'JULHO' || mes == 'AGOSTO' || mes == 'SETEMBRO') {
        estacaoCorrespondente = 'VERÃO'
    } else if (mes == 'OUTUBRO' || mes == 'NOVEMBRO' || mes == 'DEZEMBRO') {
        estacaoCorrespondente = 'OUTONO'
    } else {
        estacaoCorrespondente = 'INDEFINIDA'
    }
    
    resultado.innerHTML = `<p>No mês de <mark>${mes.toLowerCase()}</mark>, estamos na estação <mark><strong>${estacaoCorrespondente}</strong></mark>.</p>`
}
