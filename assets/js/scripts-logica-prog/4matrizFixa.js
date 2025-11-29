let btnGerarMatriz4 = document.getElementById('btnGerarMatriz4')
let resMatriz4 = document.getElementById('resMatriz4')

function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1
}

function gerarMatriz4() {
    let matriz = []
    for (let i = 0; i < 3; i++) {
        let linha = []
        for (let j = 0; j < 3; j++) {
            linha.push(gerarNumeroAleatorio())
        }
        matriz.push(linha)
    }
    return matriz
}

btnGerarMatriz4.addEventListener('click', () => {
    let matriz = gerarMatriz4()
    
    resMatriz4.innerHTML = `
        <table class="table table-dark table-bordered text-center mb-0">
            <tr>
                <td class="p-2">${matriz[0][0]}</td>
                <td class="p-2">${matriz[0][1]}</td>
                <td class="p-2">${matriz[0][2]}</td>
            </tr>
            <tr>
                <td class="p-2">${matriz[1][0]}</td>
                <td class="p-2">${matriz[1][1]}</td>
                <td class="p-2">${matriz[1][2]}</td>
            </tr>
            <tr>
                <td class="p-2">${matriz[2][0]}</td>
                <td class="p-2">${matriz[2][1]}</td>
                <td class="p-2">${matriz[2][2]}</td>
            </tr>
        </table>
    `
})