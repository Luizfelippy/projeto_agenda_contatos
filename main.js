const form = document.getElementById('form-adiciona');
const nome = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();

});

function adicionaLinha() {

    const inputNomeContato = document.getElementById('contato');
    const inputNumeroTelefone = document.getElementById('telefone');

    if (nome.includes(inputNomeContato.value))  {
        alert(`O contato ${inputNomeContato.value} já existe.`);
    } else {
        nome.push(inputNomeContato.value);
        telefone.push(parseFloat(inputNumeroTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    };

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};