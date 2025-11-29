let btnCriarArray3 = document.getElementById('btnCriarArray3')
let btnSomar3 = document.getElementById('btnSomar3')
let resArrNumeros3 = document.getElementById('resArrNumeros3')
let resSoma3 = document.getElementById('resSoma3')

if (btnCriarArray3 && btnSomar3) {
    let arrNumeros3 = []

    function gerarArrayAleatorio3() {
        let arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(Math.floor(Math.random() * 220) + 1)
        }
        return arr
    }

    function somarArray3(arr) {
        let soma = 0
        for (let i = 0; i < arr.length; i++) {
            soma += arr[i]
        }
        return soma
    }

    btnCriarArray3.addEventListener('click', () => {
        arrNumeros3 = gerarArrayAleatorio3()
        resArrNumeros3.innerText = arrNumeros3.join(', ')
        resSoma3.innerText = 'Clique em "Somar" para ver o resultado'
    })

    btnSomar3.addEventListener('click', () => {
        if (!arrNumeros3.length) {
            resSoma3.innerText = 'Primeiro crie um array.'
            return
        }

        let soma = somarArray3(arrNumeros3)
        resSoma3.innerText = 'Soma total: ' + soma
    })
}