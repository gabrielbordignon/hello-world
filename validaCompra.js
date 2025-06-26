let saldo = 200
let valorDaCompra = 500
let saldoRestante = saldo - valorDaCompra

if (saldo > valorDaCompra){
    console.log("Compra autorizada seu saldo agora é: " + saldoRestante);
}else {
    console.log("Compra não autorizada, saldo insuficiente")
}
