let btnCriarArray2 = document.getElementById('btnCriarArray2')
let btnOrdenar2 = document.getElementById('btnOrdenar2')
let resArrNumeros2 = document.getElementById('resArrNumeros2')
let resArrOrdenado2 = document.getElementById('resArrOrdenado2')
let arrNumeros2 = []

function gerarArrayAleatorio2() {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 20) + 1)
    }
    return arr
}

function bubbleSort2(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

btnCriarArray2.addEventListener('click', () => {
    arrNumeros2 = gerarArrayAleatorio2()
    resArrNumeros2.innerText = arrNumeros2.join(', ')
    resArrOrdenado2.innerText = 'Clique em "Ordenar" após criar o array'
})

btnOrdenar2.addEventListener('click', () => {
    if (!arrNumeros2.length) {
        resArrOrdenado2.innerText = 'Primeiro crie um array.'
        return
    }
    let arrOrdenado = bubbleSort2(arrNumeros2)
    resArrOrdenado2.innerText = arrOrdenado.join(', ')
})