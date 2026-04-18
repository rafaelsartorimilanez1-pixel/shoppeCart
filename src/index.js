// Importa todas as funções do serviço de carrinho
import * as cartService from './services/cart.js'

// Importa a função responsável por criar itens
import createItem from "./services/item.js"

// Mensagem inicial no console
console.log("Welcome to the you Shoppe Cart! \n")

// Array que representa o carrinho de compras
const MyCart = [];

// Array que representa a lista de desejos
const MyWishList = [];

// Cria o primeiro item (nome, preço, quantidade)
const item1 = await createItem("hotweels ferrari", 20.99, 1 );

// Cria o segundo item
const item2 = await createItem("hotweels lamborguini", 39.99, 3);

// Adiciona o item1 ao carrinho
await cartService.addItem(MyCart, item1);

// Adiciona o item2 ao carrinho
await cartService.addItem(MyCart, item2);

// Remove o item2 do carrinho (provavelmente diminui quantidade ou remove totalmente)
await cartService.removeItem(MyCart, item2)

// Exibe todos os itens atuais do carrinho
await cartService.displayCart(MyCart)

// função delete (remove o item completamente pelo nome)
// await cartService.deleteItem(MyCart, item2.name)

// Calcula o valor total do carrinho
await cartService.calculateTotal(MyCart);