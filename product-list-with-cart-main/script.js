document.addEventListener('DOMContentLoaded', () => {
    // Obter todos os botões "Adicionar"
    const buttons = document.querySelectorAll('.adicionar');

    // Adicionar um ouvinte de eventos a cada botão
    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Obter o ID do produto associado ao botão clicado
            const productId = event.target.getAttribute('data-id');
            
            // Adicionar o produto ao carrinho
            addToCart(productId);
        });
    });
});

function addToCart(productId) {
    // Obter o elemento do carrinho
    const cartContent = document.getElementById('carrinho-conteudo');

    // Adicionar o produto ao conteúdo do carrinho
    // Nota: Em um projeto real, você deve gerenciar uma lista de produtos e evitar duplicatas
    cartContent.innerHTML += `<p>Produto ${productId} adicionado.</p>`;
}
