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

// Adiciona um listener ao evento "submit" do formulário
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Impede que o formulário seja enviado

  // Recupera os valores dos campos do formulário
  const item = form.querySelector('input[name="item"]').value;
  const aplicacao = form.querySelector('input[name="aplicacao"]').value;
  const compra = form.querySelector('input[name="compra"]').value;
  const estoque = form.querySelector('input[name="estoque"]').value;
  const venda = form.querySelector('input[name="venda"]').value;

  // Cria uma nova linha na tabela
  const newRow = table.insertRow();

  // Adiciona as células na nova linha
  const cellCodigo = newRow.insertCell();
  const cellItem = newRow.insertCell();
  const cellAplicacao = newRow.insertCell();
  const cellCompra = newRow.insertCell();
  const cellEstoque = newRow.insertCell();
  const cellVenda = newRow.insertCell();

  // Define o conteúdo das células com os valores dos campos do formulário
  cellCodigo.textContent = "--";
  cellItem.textContent = item;
  cellAplicacao.textContent = aplicacao;
  cellCompra.textContent = compra;
  cellEstoque.textContent = estoque;
  cellVenda.textContent = venda;

  // Limpa os campos do formulário
  form.querySelector('input[name="item"]').value = "";
  form.querySelector('input[name="aplicacao"]').value = "";
  form.querySelector('input[name="compra"]').value = "";
  form.querySelector('input[name="estoque"]').value = "";
  form.querySelector('input[name="venda"]').value = "";

  // Oculta o formulário
  form.style.display = "none";
});