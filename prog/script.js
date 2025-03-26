let resultado = document.getElementById("resultado"); // Campo do display da calculadora
let expressao = ""; // Expressão atual exibida no display
let historico = JSON.parse(localStorage.getItem("historico")) || []; // Histórico de cálculos


function adicionarValor(valor) {
    expressao += valor;
    resultado.value = formatarExpressao(expressao);
}

function adicionarOperacao(operacao) {
    switch (operacao) {
        case '/':
            expressao += " / ";
            break;
        case '*':
            expressao += " * ";
            break;
        case '-':
            expressao += " - ";
            break;
        case '+':
            expressao += " + ";
            break;
    }
    resultado.value = formatarExpressao(expressao);
}

// Realiza o cálculo e exibe o resultado no display
function calcular() {
    try {
        let resultadoFinal = eval(expressao);
        resultado.value = resultadoFinal;

        let novaEntrada = formatarExpressao(expressao) + " = " + resultadoFinal;
        historico.push(novaEntrada);
        salvarHistorico();

        expressao = resultadoFinal.toString();
    } catch (error) {
        resultado.value = "Erro!";
        expressao = "";
    }
}

// Calcula funções científicas (sin, cos, etc.)
function calcularCientifica(funcao) {
    try {
        let valor = parseFloat(resultado.value);
        let resultadoFinal;

        switch (funcao) {
            case 'sin':
                resultadoFinal = Math.sin(valor);
                break;
            case 'cos':
                resultadoFinal = Math.cos(valor);
                break;
            case 'tan':
                resultadoFinal = Math.tan(valor);
                break;
            case 'sqrt':
                resultadoFinal = Math.sqrt(valor);
                break;
            case 'log':
                resultadoFinal = Math.log(valor);
                break;
            case 'exp':
                resultadoFinal = Math.exp(valor);
                break;
            default:
                resultadoFinal = "Erro!";
        }

        let novaEntrada = `${funcao}(${valor}) = ${resultadoFinal}`;
        historico.push(novaEntrada);
        salvarHistorico();

        resultado.value = resultadoFinal;
        expressao = resultadoFinal.toString();
    } catch (error) {
        resultado.value = "Erro!";
        expressao = "";
    }
}

// Limpa o display da calculadora
function limpar() {
    expressao = "";
    resultado.value = "";
}

// Apaga o último caractere do display
function apagarUltimo() {
    if (expressao.slice(-1) === " ") {
        expressao = expressao.slice(0, -2).trim();
    } else {
        expressao = expressao.slice(0, -1).trim();
    }
    resultado.value = formatarExpressao(expressao);
}

// Formata a expressão para exibir corretamente no display
function formatarExpressao(expressao) {
    return expressao
        .replace(/\//g, "÷")
        .replace(/\*/g, "×");
}

// Salva o histórico no LocalStorage
function salvarHistorico() {
    localStorage.setItem("historico", JSON.stringify(historico));
}

// **Funções de Navegação**

// Abre o menu suspenso
function abrirMenu() {
    const menuDropdown = document.getElementById("menu-dropdown");
    menuDropdown.style.display = menuDropdown.style.display === "block" ? "none" : "block";
}

// Redireciona para o histórico
function abrirHistorico() {
    localStorage.setItem("origemCalculadora", "cientifica"); // Marca origem como científica
    window.location.href = "historico.html";
}

// Redireciona para a calculadora financeira
function abrirCalculadoraFinanceira() {
    localStorage.setItem("origemCalculadora", "financeira"); // Marca origem como financeira
    window.location.href = "financeira.html";
}

// **Teclas do Teclado**
document.addEventListener("keydown", function (event) {
    const tecla = event.key;

    if (!isNaN(tecla)) {
        adicionarValor(tecla);
    } else if (tecla === "+") {
        adicionarOperacao("+");
    } else if (tecla === "-") {
        adicionarOperacao("-");
    } else if (tecla === "*") {
        adicionarOperacao("*");
    } else if (tecla === "/") {
        adicionarOperacao("/");
    } else if (tecla === "Enter") {
        calcular();
    } else if (tecla === "Backspace") {
        apagarUltimo();
    }else if (tecla === "c") {
        limpar()
    }else if (tecla === ".") {
        adicionarValor (".")
    }
});