// quais ações meu carrinho pode fazer??

/** Casos de uso.
 * 
 * -> Adicionar item
 * -> Listar itens
 * -> Remover 1 unidade de um item
 * -> Deletar item completamente
 * -> Calcular total
 */

// 🆗 Adicionar item no carrinho
async function addItem (userCart, item){
    // Adiciona o item no array do carrinho
    userCart.push(item)
}

// Calcular o total do carrinho
async function calculateTotal(userCart){
    console.log("Shoppe Cart total: \n")

    // Soma todos os subtotais dos itens do carrinho
    const result = userCart.reduce((total, item) => total + item.subtotal, 0);

    // Exibe o total formatado com 2 casas decimais
    console.log(`\nTotal: R$ ${result.toFixed(2)}`)
}

// Deletar item do carrinho (remove completamente pelo nome)
async function deleteItem (userCart, name){
    // Procura o índice do item pelo nome
    const index = userCart.findIndex((item) => item.name === name)

    // Se encontrar, remove o item do array
    if(index !== -1){
        userCart.splice(index, 1)
    }
}

// Remover item (remove apenas 1 unidade ou deleta se for o último)
async function removeItem(userCart, item) {

    // Procura o item pelo nome dentro do carrinho
    const indexFound = userCart.findIndex((p) => p.name === item.name);
    
    // Caso não encontre
    if(indexFound === -1){
        console.log("item não encontrado")
        return
    }

    // Se tiver mais de 1 unidade, apenas diminui a quantidade
    if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity -= 1;
        return
    }

    // Se tiver apenas 1, remove o item do carrinho
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound, 1);
        return
    }

}

// Exibir todos os itens do carrinho
async function displayCart(userCart){
    console.log("\nShopee cart list: ")

    // Percorre todos os itens e mostra no console
    userCart.forEach((item, index) => {
        console.log(
            `${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal = ${item.subtotal}`
        )
    });
}

// Exporta todas as funções para uso externo
export {
    addItem,
    calculateTotal,
    deleteItem,
    removeItem,
    displayCart
}