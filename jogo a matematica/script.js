const questionContainer = document.getElementById("question-container");
const answerInput = document.getElementById("answer-input");
const submitButton = document.getElementById("submit-button");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");

let score = 0;
let time = 5;
let currentQuestion = {};
let interval;

const generateQuestion = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-", "*"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    let answer;
    if (operator === "-" && num2 > num1) {
        [num1, num2] = [num2, num1];
    }

    if (operator === "+") {
        answer = num1 + num2;
    } else if (operator === "-") {
        answer = num1 - num2;
    } else if (operator === "*") {
        answer = num1 * num2;
    }

    currentQuestion = { num1, num2, operator, answer };
    questionContainer.textContent = `${num1} ${operator} ${num2} = ?`;
};

const startGame = () => {
    generateQuestion();
    interval = setInterval(() => {
        time--;
        timerDisplay.textContent = `Tempo: ${time}`;
        if (time === 0) {
            clearInterval(interval);
            feedback.textContent = "Tempo esgotado!";
            feedback.style.color = "red";
            submitButton.disabled = true;
        }
    }, 1000);
};

const checkAnswer = () => {
    const userAnswer = parseInt(answerInput.value, 10);
    if (userAnswer === currentQuestion.answer) {
        feedback.textContent = "Correto!";
        feedback.style.color = "green";
        score++;
        time = 5;
        generateQuestion();
    } else {
        feedback.textContent = "Errado!";
        feedback.style.color = "red";
    }
    answerInput.value = "";
    scoreDisplay.textContent = `Pontos: ${score}`;
};

submitButton.addEventListener("click", checkAnswer);
answerInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkAnswer();
    }
});

window.addEventListener("load", startGame);
