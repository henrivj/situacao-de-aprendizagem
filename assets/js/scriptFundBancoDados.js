const btnAdicionar = document.getElementById('btnAdicionar')
let contador = 1

btnAdicionar.addEventListener('click', () => {
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const cidade = document.getElementById('cidade').value
    const tabela = document.getElementById('tabela')

    if (nome && idade && cidade) {
        tabela.innerHTML += `
                    <tr>
                        <td>${contador++}</td>
                        <td>${nome}</td>
                        <td>${idade}</td>
                        <td>${cidade}</td>
                    </tr>
                `;
        nome = idade = cidade = ''
    } else {
        alert('Preencha todos os campos.')
        return
    }
});