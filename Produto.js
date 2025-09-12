class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    this.preco -= this.preco * (percentual / 100);
  }
}

// 🔍 Exemplo de teste
const livro = new Produto("Livro de JavaScript", 188);
livro.aplicarDesconto(20);
console.log(`Preço com desconto: R$ ${livro.preco}`); 
