const btn_cadastro_abrirformulario = document.querySelector('.btn_cadastro_abrirformulario');

// adiciona um evento de clique ao botão
btn_cadastro_abrirformulario.addEventListener('click', function() {
    // seleciona o formulário pelo seu id
    const meuFormulario = document.querySelector('.form_product');

    // mostra o formulário
    meuFormulario.style.display = 'block';
});