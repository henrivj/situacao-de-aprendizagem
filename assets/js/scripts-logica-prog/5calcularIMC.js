let inputPeso7 = document.getElementById('inputPeso7')
let inputAltura7 = document.getElementById('inputAltura7')
let btnCalcular7 = document.getElementById('btnCalcular7')
let resIMC7 = document.getElementById('resIMC7')

function calcularIMC7(peso, altura) {
    if (!altura) {
        return 0
    }
    return (peso / (altura * altura)).toFixed(2)
}

btnCalcular7.addEventListener('click', () => {
    let peso = Number(inputPeso7.value)
    let altura = Number(inputAltura7.value)

    if (peso <= 0 || altura <= 0) {
        resIMC7.innerText = 'Informe peso e altura válidos.'
        return
    }

    let imc = calcularIMC7(peso, altura)
    resIMC7.innerText = 'IMC: ' + imc
})