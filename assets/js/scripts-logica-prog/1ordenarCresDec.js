let switchCrescente1 = document.getElementById('switchCrescente1')
let btnCriarArray1 = document.getElementById('btnCriarArray1')
let btnOrdenar1 = document.getElementById('btnOrdenar1')
let resArrOrdenado1 = document.getElementById('resArrOrdenado1')
let resArrNumeros1 = document.getElementById('resArrNumeros1')

let arrNumeros1 = []

function gerarArrayAleatorio1() {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 20) + 1)
    }
    return arr
}

btnCriarArray1.addEventListener('click', () => {
    arrNumeros1 = gerarArrayAleatorio1()
    resArrNumeros1.innerText = arrNumeros1.join(', ')
    resArrOrdenado1.innerText = 'Clique em "Ordenar" após criar o array'
})

btnOrdenar1.addEventListener('click', () => {
    if (!arrNumeros1.length) {
        resArrOrdenado1.innerText = 'Primeiro crie um array.'
        return
    }

    let arrOrdenado1 = arrNumeros1.sort((a, b) => a - b)

    if (!switchCrescente1.checked) {
        arrOrdenado1.reverse()
    }

    resArrOrdenado1.innerText = arrOrdenado1.join(', ')
})