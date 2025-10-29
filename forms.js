let Clientes = []
let emails = new Set()
let idNumero = new Map()

function cadastrarCliente() {
    for (let i = 0; i < 3;  i++) {
    Clientes.push(prompt("qual o nome do cliente"))
    emails.add(prompt("qual o email"))
    idNumero.set(prompt("qual o id do cliente"), prompt("qual o numero do cliente"))
    }
}

cadastrarCliente()
console.log(Clientes)
console.log(emails)
console.log(idNumero)
