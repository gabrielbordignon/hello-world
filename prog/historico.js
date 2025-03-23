// Carrega o histórico ao abrir a página
window.onload = () => {
    const historicoDiv = document.getElementById("historico");
    const historico = JSON.parse(localStorage.getItem("historico")) || [];

    const simbolos = {
        "+": "+",
        "-": "−",
        "*": "×",
        "/": "÷",
        "sin": "sin",
        "cos": "cos",
        "tan": "tan",
        "sqrt": "√",
        "log": "log",
        "exp": "exp"
    };

    historicoDiv.innerHTML = historico
        .map(entry => {
            let formatado = entry.replace(/[\+\-\*\/]|(sin|cos|tan|sqrt|log|exp)/g, match => simbolos[match]);
            return `<p>${formatado}</p><hr>`;
        })
        .join('');
};

// Limpa o histórico
function limpar() {
    localStorage.removeItem("historico");
    const historicoDiv = document.getElementById("historico");
    historicoDiv.innerHTML = `<p>O histórico foi apagado.</p>`;
}

// Redireciona para a calculadora correta com base no localStorage
function voltarCalculadora() {
    const origem = localStorage.getItem("origemCalculadora"); // Obtém a origem armazenada

    // Redireciona com base na origem
    if (origem === "financeira") {
        window.location.href = "financeira.html"; // Certifique-se de que o arquivo existe
    } else if (origem === "cientifica") {
        window.location.href = "index.html"; // Certifique-se de que este é o caminho correto
    } else {
        // Caso não haja origem definida, redireciona para a calculadora científica como padrão
        window.location.href = "index.html";
    }
}

