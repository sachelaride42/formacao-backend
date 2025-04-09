const listaProdutos = [
    { id: 1, nome: "Camiseta", preco: 25.99 },
    { id: 2, nome: "Calça Jeans", preco: 49.99 },
    { id: 3, nome: "Tênis", preco: 79.99 },
    { id: 4, nome: "Boné", preco: 15.99 }
]

function filtrarOrdenarProdutosPorPreco (lista, precoMax) {
    let produtosFiltrados = lista.filter((produto) => {
        return produto.preco <= precoMax;
    });
    return produtosFiltrados.sort((a, b) => {
        if(a.preco < b.preco) {
            return -1;
        } else if (a.preco > b.preco) {
            return 1;
        } else {
            return 0;
        }
    })
}

console.log(filtrarOrdenarProdutosPorPreco(listaProdutos, 50));

