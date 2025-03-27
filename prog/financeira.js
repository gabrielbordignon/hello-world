const resultadoFinanceira = document.getElementById("resultadoFinanceira"); // Certifique-se que o ID corresponde no HTML
const instrucoes = document.getElementById("instrucoes");
const dolar = 5.71

let historico = JSON.parse(localStorage.getItem("historico")) || [];
let operacaoSelecionada = ""; // Operação financeira atual
let dadosOperacao = []; // Dados fornecidos pelo usuário
let passoAtual = 0; // Controla o passo da operação

function limparFinanceira() {
    if (!resultadoFinanceira || !instrucoes) return; // Proteção contra elementos ausentes
    resultadoFinanceira.value = "";
    instrucoes.innerText = "Selecione uma operação financeira";
    operacaoSelecionada = "";
    dadosOperacao = [];
    passoAtual = 0;
}


function adicionarValorFinanceira(valor) {
    if (!resultadoFinanceira) return;
    resultadoFinanceira.value += valor;
}

// Seleciona a operação financeira
function selecionarOperacao(operacao) {
    limparFinanceira(); // Reseta dados anteriores
    operacaoSelecionada = operacao;

    switch (operacao) {
        case "jurosSimples":
            instrucoes.innerText = "Digite o valor principal (R$):";
            break;
        case "jurosCompostos":
            instrucoes.innerText = "Digite o valor principal (R$):";
            break;
        case "conversaoMoeda":
            instrucoes.innerText = "Digite o valor em dólares (US$):";
            break;
        case "parcelas":
            instrucoes.innerText = "Digite o valor total do empréstimo (R$):";
            break;
        default:
            instrucoes.innerText = "Operação inválida!";
    }
}

// Captura o próximo dado ao pressionar "Enter"
function proximoDado() {
    if (!resultadoFinanceira) return;

    const valor = parseFloat(resultadoFinanceira.value);

    if (!isNaN(valor)) {
        dadosOperacao.push(valor);
        resultadoFinanceira.value = "";
        passoAtual++;

        
        switch (operacaoSelecionada) {
            case "jurosSimples":
                if (passoAtual === 1) {
                    instrucoes.innerText = "Digite a taxa de juros (%):";
                } else if (passoAtual === 2) {
                    instrucoes.innerText = "Digite o tempo (em anos):";
                } else if (passoAtual === 3) {
                    calcularJurosSimples(dadosOperacao[0], dadosOperacao[1], dadosOperacao[2]);
                }
                break;

            case "jurosCompostos":
                if (passoAtual === 1) {
                    instrucoes.innerText = "Digite a taxa de juros (%):";
                } else if (passoAtual === 2) {
                    instrucoes.innerText = "Digite o tempo (em anos):";
                } else if (passoAtual === 3) {
                    calcularJurosCompostos(dadosOperacao[0], dadosOperacao[1], dadosOperacao[2]);
                }
                break;

            case "conversaoMoeda":
                if (passoAtual === 1) {
                    calcularConversaoMoeda(dadosOperacao[0], dolar)
                }
                break;

            case "parcelas":
                if (passoAtual === 1) {
                    instrucoes.innerText = "Digite a taxa de juros mensal (%):";
                } else if (passoAtual === 2) {
                    instrucoes.innerText = "Digite o número de parcelas:";
                } else if (passoAtual === 3) {
                    calcularParcelas(dadosOperacao[0], dadosOperacao[1], dadosOperacao[2]);
                }
                break;

            default:
                instrucoes.innerText = "Operação inválida!";
        }
    } else {
        instrucoes.innerText = "Por favor, insira um número válido!";
    }
}


function calcularJurosSimples(principal, taxa, tempo) {
    const juros = principal * (taxa / 100) * tempo;
    resultadoFinanceira.value = `Juros: R$${juros.toFixed(2)}`;
    instrucoes.innerText = "Cálculo concluído!";
    salvarNoHistorico(`Juros Simples: Principal R$${principal}, Taxa ${taxa}%, Tempo ${tempo} anos = Juros R$${juros.toFixed(2)}`);
}

function calcularJurosCompostos(principal, taxa, tempo) {
    const montante = principal * Math.pow(1 + taxa / 100, tempo);
    resultadoFinanceira.value = `Montante: R$${montante.toFixed(2)}`;
    instrucoes.innerText = "Cálculo concluído!";
    salvarNoHistorico(`Juros Compostos: Principal R$${principal}, Taxa ${taxa}%, Tempo ${tempo} anos = Montante R$${montante.toFixed(2)}`);
}

function calcularConversaoMoeda(valor, dolar){
    const convertido = valor * dolar;
    resultadoFinanceira.value = `R$${convertido.toFixed(2)}`;
    instrucoes.innerText = "Conversão concluída!";
    salvarNoHistorico(`Conversão: US$${valor} = R$${convertido.toFixed(2)}`);
}

function calcularParcelas(total, taxa, meses) {
    const parcela = (total * (taxa / 100)) / (1 - Math.pow(1 + taxa / 100, -meses));
    resultadoFinanceira.value = `Parcela: R$${parcela.toFixed(2)}`;
    instrucoes.innerText = "Cálculo concluído!";
    salvarNoHistorico(`Parcelas: Total R$${total}, Taxa ${taxa}%, Parcelas ${meses} = R$${parcela.toFixed(2)}`);
}

// Salva no histórico
function salvarNoHistorico(operacao) {
    historico.push(operacao);
    localStorage.setItem("historico", JSON.stringify(historico));
}

// Apaga o último caractere no display
function apagarUltimo() {
    if (resultadoFinanceira) {
        resultadoFinanceira.value = resultadoFinanceira.value.slice(0, -1);
    }
}

function irParaCalculadoraCientifica() {
    window.location.href = "index.html"; 
}

function abrirHistorico () {
    window.location.href = "historico.html";
}

function abrirMenu() {
    const menuDropdown = document.getElementById("menu-dropdown");
    menuDropdown.style.display = menuDropdown.style.display === "block" ? "none" : "block";
}

document.addEventListener("keydown", function (event) {
    const tecla = event.key;
    
    
    if (!isNaN(tecla)){
        adicionarValorFinanceira(tecla)
    }else if (tecla === "Enter"){
        proximoDado()
    }else if (tecla === "Backspace"){
        apagarUltimo()
    }else if (tecla === "c") {
        limparFinanceira()
    }else if (tecla === ".") 
        adicionarValorFinanceira (".")
    }
)