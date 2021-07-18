function maiorValor(){
    let dataAgora = new Date 
    
    let resultado = document.getElementById('res')

    resultado.innerHTML = `
    <p>O que eu recebi do sistema foi <mark>${dataAgora}</mark></p>
    ` 
}

