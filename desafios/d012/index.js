function verificar(){
    let precoAnterior = Number(prompt('Qual era o preço anterior do produto? '))
    let precoAtual = Number(prompt('Qual é o preço atual do produto? '))

    let resultado = document.getElementById('res')

    res.innerHTML = `
    <h2>Analisando os valores informados</h2>
    <p>O produto custava R$${precoAnterior.toFixed(2)} e agora custa R$${precoAtual.toFixed(2)}</p>
    `
    if (precoAtual > precoAnterior) {
        let diferencaCaro = precoAtual - precoAnterior
        let variacaoCaro = (diferencaCaro * 100) / precoAtual
        res.innerHTML += `
        <p>Hoje o produto está mais caro.</p>
        <p>O preço subiu R$${diferencaCaro.toFixed(2)} em relação ao preço anterior.</p>
        <p>Uma variação de ${variacaoCaro.toFixed(2)}% pra cima.</p>
        `
    } else {
        let diferencaBarato = precoAnterior - precoAtual
        let variacaoBarato = (diferencaBarato * 100) / precoAnterior
        res.innerHTML += `
        <p>Hoje o produto está mais barato.</p>
        <p>O preço caiu R$${diferencaBarato.toFixed(2)} em relação ao preço anterior.</p>
        <p>Uma variação de ${variacaoBarato.toFixed(2)}% pra baixo.</p>
        `
    }
    
}