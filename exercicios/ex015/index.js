function analisar(){
    let dataAgora = new Date 

    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semanas = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')

    let dia = dataAgora.getDate()
    let mes = dataAgora.getMonth()
    let ano = dataAgora.getFullYear()
    let diaSemana = dataAgora.getDay()
    let hora = dataAgora.getHours()
    let minuto = dataAgora.getMinutes()
    let segundo = dataAgora.getSeconds()

    let resultado = document.getElementById('res')

    resultado.innerHTML = `
    <p>Dia: <mark>${dia}</mark></p>
    <p>Mês: <mark>${meses[mes]}</mark></p>
    <p>Ano: <mark>${ano}</mark></p>
    <p>Dia da Semana: <mark>${semanas[diaSemana]}</mark></p>
    <p>Hora: <mark>${hora}</mark></p>
    <p>Minutos: <mark>${minuto}</mark></p>
    <p>Segundos: <mark>${segundo}</mark></p>
    ` 
}

