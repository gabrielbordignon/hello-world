let nome = "Amanda"; 
// Comparação entre "Amanda" e "amanda" (case-sensitive) 
if (nome == "amanda") {
    console.log("Encontrado!"); } 
else { 
    console.log("Não encontrado!"); 
}


let notas = [7, 8, 9];
// notas.length = 3, logo o índice 3 é a próxima posição livre
notas[notas.length] = 10;
console.log(notas);


let alunos = ["Carlos", "Ana", "João"]; 
// indexOf retorna o índice do elemento encontrado
let busca = alunos.indexOf("Ana");
console.log(busca);


let lista = ["A", "B"]; 
// push adiciona no final 
lista.push("C"); 
// lista.length aponta para a próxima posição livre
lista[lista.length] = "D"; 
console.log(lista);

let texto = "Lógica Computacional"; 
// Converte para minúsculas e verifica se contém "lógica" 
console.log(texto.toLowerCase().includes("lógica"));




let nomes = ["Ana", "Bruno", "Carlos"]; 
// Percorre todos os nomes e compara com "Carlos" 
for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === "Carlos") {
        console.log("Achado!");
    }
}




let idade = "20"; // string 
// Comparação estrita: valor e tipo
if (idade === 20) { 
    Console.log("Igual"); 
} else {
  console.log("Diferente"); 
}




let dados = ["A", "B", "C"]; 
// Cria posições vazias até o índice 5 
dados[5] = "Z"; 
console.log(dados.length);
