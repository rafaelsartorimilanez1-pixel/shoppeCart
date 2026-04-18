// Casos de uso dos items

// Função responsável por criar um item do carrinho
async function createItem(name, price, quantity){
    
    // Retorna um objeto representando o item
    return {
        name,        // Nome do produto
        price,       // Preço unitário do produto
        quantity,    // Quantidade do produto

        // Subtotal calculado automaticamente (preço * quantidade)
        subtotal: price * quantity,
    }
}

// Exporta a função para ser usada em outros arquivos
export default createItem