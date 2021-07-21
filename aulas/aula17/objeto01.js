let amigo = {
    nome: 'Ana', 
    sexo: 'F', 
    peso: 65, 
    engordar(peso=0){ 
        console.log('Engordou') 
        this.peso += peso 
    }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)