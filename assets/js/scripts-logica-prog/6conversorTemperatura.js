let inputTemp5 = document.getElementById('inputTemp5')
let switchConversao5 = document.getElementById('switchConversao5')
let btnConverter5 = document.getElementById('btnConverter5')
let resConversao5 = document.getElementById('resConversao5')

function paraCelsius(valor) {
    return ((valor - 32) * 5) / 9
}

function paraFahrenheit(valor) {
    return (valor * 9) / 5 + 32
}

btnConverter5.addEventListener('click', () => {
    let valor = Number(inputTemp5.value)
    if (isNaN(valor)) {
        resConversao5.innerText = 'Digite uma temperatura válida.'
        return
    }

    if (switchConversao5.checked) {
        let resultado = paraFahrenheit(valor).toFixed(1)
        resConversao5.innerText = valor + '°C = ' + resultado + '°F'
    } else {
        let resultado = paraCelsius(valor).toFixed(1)
        resConversao5.innerText = valor + '°F = ' + resultado + '°C'
    }
})