function contador() {
    let resultado = document.getElementById('res')

    resultado.innerHTML += `<h2>Contando de 1 até 10<h2>`

    for (let i = 1; i <= 10; i++) {
        if (i % 2 != 0) {
            resultado.innerHTML += ` ${i} &#x1F449; `
        } else {
            resultado.innerHTML += `<mark> <strong>${i}</strong> </mark> &#x1F449;`
        }
    }
    
    resultado.innerHTML += ` &#x1F3C1;`
}
