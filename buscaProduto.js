class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    this.preco -= this.preco * (percentual / 100);
  }
}

function buscarProduto(listaProdutos, nomeProduto) {
  for (let i = 0; i < listaProdutos.length; i++) {
    if (listaProdutos[i].nome === nomeProduto) {
      return listaProdutos[i]; // Retorna o produto completo
    }
  }
  return null; // Retorna null caso o produto não seja encontrado
}

// Lista de produtos
let produtos = [
  new Produto("Livro", 188),
  new Produto("Camiseta", 59),
  new Produto("Curso de JavaScript", 350)
];

// Exemplo de uso da função
const produtoBuscado = buscarProduto(produtos, "Camiseta");

if (produtoBuscado) {
  console.log(`Produto encontrado: ${produtoBuscado.nome} - R$ ${produtoBuscado.preco}`);
} else {
  console.log("Produto não encontrado");
}
