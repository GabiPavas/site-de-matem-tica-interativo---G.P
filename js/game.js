let num1, num2;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10);
    num2 = Math.floor(Math.random() * 10);
    document.getElementById("question").textContent = `${num1} + ${num2}`;
    document.getElementById("answer").value = "";
    document.getElementById("result").textContent = "";
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer").value);
    let correctAnswer = num1 + num2;

    if (userAnswer === correctAnswer) {
        document.getElementById("result").textContent = "Resposta correta!";
    } else {
        document.getElementById("result").textContent = `Errado! A resposta certa é ${correctAnswer}`;
    }

    setTimeout(generateQuestion, 2000);
}

generateQuestion();