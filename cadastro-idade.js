function processarIdade() {
  while (true) {
    let idadeStr = prompt("Por favor, digite sua idade:");

    // Verifica se o usuário cancelou o prompt ou digitou vazio
    if (idadeStr === null || idadeStr.trim() === "") {
      console.log("Entrada cancelada ou vazia. Tente novamente.");
      continue;
    }

    try {
      let idade = parseInt(idadeStr);

      // Verifica se a conversão resultou em um número válido (NaN = Not a Number)
      if (isNaN(idade)) {
        console.log("Entrada inválida. Por favor, digite um número inteiro.");
      } else if (idade < 0) {
        console.log("Idade não pode ser negativa. Tente novamente.");
      } else {
        console.log(`Sua idade é: ${idade}`);
        break; // Sai do loop se a entrada for válida
      }
    } catch (e) {
      // Embora parseInt não gere exceções para falhas de conversão como int() em Python,
      // manter o try-catch é uma boa prática para erros inesperados.
      console.log("Ocorreu um erro inesperado ao processar a idade.");
    }
  }
}

// Chamar a função para testar
processarIdade();
