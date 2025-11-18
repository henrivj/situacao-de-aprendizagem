hljs.highlightAll()

let btnCalc1 = document.getElementById('btnCalc1');
let btnCalc2 = document.getElementById('btnCalc2');

let input1a = document.getElementById('input1a');
let input1b = document.getElementById('input1b');
let input2a = document.getElementById('input2a');
let input2b = document.getElementById('input2b');
let input3a = document.getElementById('input3a');
let input3b = document.getElementById('input3b');

let resTensao = document.getElementById('resTensao');
let resCorrente = document.getElementById('resCorrente');
let resResistencia = document.getElementById('resResistencia');

let input4a = document.getElementById('input4a');
let input4b = document.getElementById('input4b');
let input5a = document.getElementById('input5a');
let input5b = document.getElementById('input5b');
let input6a = document.getElementById('input6a');
let input6b = document.getElementById('input6b');

let resPotencia1 = document.getElementById('resPotencia1');
let resPotencia2 = document.getElementById('resPotencia2');
let resPotencia3 = document.getElementById('resPotencia3');

function filtrarNaN(valor) {
    if (isNaN(valor) || !isFinite(valor)) {
        return 0;
    } else {
        return Number(valor);
    }
}

// calc. Lei de Ohm
btnCalc1.addEventListener('click', () => {
    // V = I × R
    const tensao = Number(input1a.value) * Number(input1b.value);
    resTensao.innerHTML = filtrarNaN(Number(tensao.toFixed(2))) + ' V';

    // I = V ÷ R
    const corrente = Number(input2a.value) / Number(input2b.value);
    resCorrente.innerHTML = filtrarNaN(Number(corrente.toFixed(2))) + ' A';

    // R = V ÷ I
    const resistencia = Number(input3a.value) / Number(input3b.value);
    resResistencia.innerHTML = filtrarNaN(Number(resistencia.toFixed(2))) + ' Ω';
});

btnCalc2.addEventListener('click', () => {
    // P = V × I
    const potencia1 = Number(input4a.value) * Number(input4b.value);
    if (resPotencia1) resPotencia1.innerHTML = filtrarNaN(Number(potencia1.toFixed(2))) + ' W';

    // P = I^2 × R
    const potencia2 = (Number(input5a.value) ** 2) * Number(input5b.value);
    if (resPotencia2) resPotencia2.innerHTML = filtrarNaN(Number(potencia2.toFixed(2))) + ' W';

    // P = V^2 ÷ R
    const potencia3 = (Number(input6a.value) ** 2) / Number(input6b.value);
    if (resPotencia3) resPotencia3.innerHTML = `${filtrarNaN(Number(potencia3.toFixed(2)))} W`;
});