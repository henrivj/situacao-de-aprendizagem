const tabela = document.getElementById('tabela')
const btnAdicionar = document.getElementById('btnAdicionar')
const btnLimpar = document.getElementById('btnLimpar')

const nome = document.getElementById('nome')
const idade = document.getElementById('idade')
const cidade = document.getElementById('cidade')

let contador = 0

btnAdicionar.addEventListener('click', () => {
    if (nome.value && idade.value && cidade.value) {
        tabela.innerHTML += `
            <tr>
                <td>${contador}</td>
                <td>${nome.value}</td>
                <td>${idade.value}</td>
                <td>${cidade.value}</td>
            </tr>
            `

        contador++

        nome.value = idade.value = cidade.value = ''
    } else {
        alert('Preencha todos os campos.')
        return
    }
})

btnLimpar.addEventListener('click', () => {
    tabela.innerHTML = ``
})