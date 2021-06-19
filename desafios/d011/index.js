function bissexto(){
    let ano = Number(prompt('Qual é o ano que você quer verificar? '))

    let resultado = document.getElementById('res')

    res.innerHTML = `<h2>Analisando o ano de ${ano}...</h2>`

    if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))){
        res.innerHTML += `
        <p>O ano de ${ano} <mark style="background-color: #95DA88;">É BISSEXTO</mark></p>
        `
    } else {
        res.innerHTML += `
        <p>O ano de ${ano} <mark style="background-color: #E28783;">NÃO É BISSEXTO</mark></p>
        `
    }
}