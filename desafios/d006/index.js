function conversor() {
    let tempC = Number(prompt('Digite uma temperatura em °C (Celsius) '))

    let tempK = tempC + 273.15
    let tempF = (tempK - 273.15) * (9/5) + 32 

    let resultado = document.getElementById('res')

    resultado.innerHTML = `
    <h2>A temperatura de ${tempC.toFixed(2)}°C, corresponde a...</h2>
    <p>${tempK.toFixed(2)}°K (Kelvin)</p>
    <p>${tempF.toFixed(2)}°F (Fahrenheit)</p>
    `
}