const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroAgenda = document.getElementById('numero-agenda');

    let linha = '<tr>';
    linha += `<td>${inputNomeAgenda.value}</td>`;
    linha += `<td>${inputNumeroAgenda.value}</td>`;
    linha += '</tr>';
    
    linhas += linha;

    // colocar conteudo dentro do corpo da tabela
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    // limpar campo após inserir
    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
    
    // alert(`Nome do contato: ${inputNomeAgenda.value} - Número: ${inputNumeroAgenda.value}`);
});