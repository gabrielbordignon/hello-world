const nomes = ["Ana", "Bruno", "Carla"];
const iterador = nomes[Symbol.iterator]();

while (true) {
  const atual = iterador.next();
  if (atual.done) break;
  console.log(atual.value);
}


const clientes = ["Ana", "Bruno"];
const iterador = clientes[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());



const texto = "Carla";
for (const letra of texto) {
  console.log(letra);
}



const dados = new Set(["A", "B", "C"]);
const iterador = dados[Symbol.iterator]();

console.log(iterador.next().value);



const mapa = new Map([[1, "A"], [2, "B"]]);
for (const par of mapa) {
  console.log(par);
}
