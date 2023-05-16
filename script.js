const btn_cadastro_abrirformulario = document.querySelector('.btn_cadastro_abrirformulario');

// adiciona um evento de clique ao botão
btn_cadastro_abrirformulario.addEventListener('click', function() {
    // seleciona o formulário 
    const meuFormulario = document.querySelector('.form_product');

    // mostra o formulário
    meuFormulario.style.display = 'block';
});

// Seleciona o formulário e a tabela
const form = document.querySelector(".form_product");
const table = document.querySelector(".tabela_cadastro tbody");
const resetButton = document.querySelector("[data-resetButton]");

// Garda as linhas numa variável global
window.rows = '';

function formatNumberToMoney(value) {
  return 'R$'+value;
}

function renderTable(formData) {
  const item = formData.get('item');
  const venda = formData.get('venda');
  const compra = formData.get('compra');
  const codigo = formData.get('codigo');
  const estoque = formData.get('estoque');
  const aplicacao = formData.get('aplicacao');

  // Cria o template da linha
  let row = `
    <tr>
      <td>${codigo}</td>
      <td>${item}</td>
      <td>${aplicacao}</td>
      <td>${formatNumberToMoney(compra)}</td>
      <td>${estoque}</td>
      <td>${formatNumberToMoney(venda)}</td>
    </tr>
  `;

  window.rows += row;

  const tbody = document.querySelector('.tabela_cadastro tbody');
  tbody.innerHTML = window.rows;
} 

function onSubmitForm(event) {
  event.preventDefault(); // Impede que o formulário seja enviado

  // Recupera os valores dos campos do formulário
  const formData = new FormData(event.target);

  // Cria uma nova linha na tabela //
  const newRow = table.insertRow();

  // Adiciona as células na nova linha
  const cellItem = newRow.insertCell();
  const cellVenda = newRow.insertCell();
  const cellCompra = newRow.insertCell();
  const cellCodigo = newRow.insertCell();
  const cellEstoque = newRow.insertCell();
  const cellAplicacao = newRow.insertCell();

  // Define o conteúdo das células com os valores dos campos do formulário
  renderTable(formData);

  // Forca o botão de "limpar campos" ser precionado (clicado)///
  resetButton.click();

  // Oculta o formulário
  form.style.display = "none";
}

// Adiciona um listener ao evento "submit" do formulário.
form.addEventListener("submit", onSubmitForm);
