let cont = 0
let resultado = document.getElementById('res')


function contador(){
    cont++
    
    resultado.innerHTML = `<p>O contador está com <mark>${cont}</mark> cliques</p>` 
}

function zerar(){
    cont = 0

    resultado.innerHTML = `<p>O contador está com <mark>0</mark> cliques</p>` 
}