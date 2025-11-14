function verificarAprovacao(media) {
  if (media >= 7) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

const resultado = verificarAprovacao(6.5);
console.log(`Resultado: ${resultado}`);
