function calcularTroco() {
    let nome = prompt('Que produto você está comprando? ')
    let preco = Number(prompt(`Quanto custa ${nome} que você está comprando? `))
    let valor = Number(prompt(`Qual foi o valor que você deu para pagar ${nome}? `))

    let troco = valor - preco

    alert(`Você comprou ${nome} que custou R$ ${preco}.\n Deu R$ ${valor} em dinheiro e vai receber R$ ${troco} de troco.\n Volte sempre!`)
}