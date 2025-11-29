let btnCriarArray6 = document.getElementById('btnCriarArray6')
let btnBuscar6 = document.getElementById('btnBuscar6')
let inputBusca6 = document.getElementById('inputBusca6')
let resArrNumeros6 = document.getElementById('resArrNumeros6')
let resBusca6 = document.getElementById('resBusca6')

if (btnCriarArray6 && btnBuscar6) {
    let arrNumeros6 = []

    function gerarArrayAleatorio6() {
        let arr = []
        for (let i = 0; i < 8; i++) {
            arr.push(Math.floor(Math.random() * 30) + 1)
        }
        return arr
    }

    function buscaLinear6(arr, valor) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === valor) {
                return i
            }
        }
        return -1
    }

    btnCriarArray6.addEventListener('click', () => {
        arrNumeros6 = gerarArrayAleatorio6()
        resArrNumeros6.innerText = arrNumeros6.join(', ')
        resBusca6.innerText = 'Digite um número e clique em "Buscar"'
    })

    btnBuscar6.addEventListener('click', () => {
        if (!arrNumeros6.length) {
            resBusca6.innerText = 'Primeiro crie um array.'
            return
        }

        let valor = Number(inputBusca6.value)
        if (isNaN(valor)) {
            resBusca6.innerText = 'Digite um número válido.'
            return
        }

        let indice = buscaLinear6(arrNumeros6, valor)
        if (indice === -1) {
            resBusca6.innerText = 'Valor não encontrado.'
        } else {
            resBusca6.innerText = 'Valor encontrado na posição ' + indice + '.'
        }
    })
}