let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function generateQuestion() {
    num1 = Math.floor(10 * Math.random());
    num2 = Math.floor(10 * Math.random());
    operator = operators[Math.floor(3 * Math.random())];
    
    switch (operator) {
        case "+": correctAnswer = num1 + num2; break;
        case "-": correctAnswer = num1 - num2; break;
        case "*": correctAnswer = num1 * num2; break;
    }

    document.getElementById("question").textContent = String(num1) + " " + operator + " " + String(num2);
}

function checkAnswer() {
    const ans = Number(document.getElementById("answer").value);

    if (ans === correctAnswer) {
        document.getElementById("message").textContent = "Correct!";
        score += 1;
        document.getElementById("score").textContent = String(score);
    }
    else {
        document.getElementById("message").textContent = "Wrong! Correct answer was " + String(correctAnswer) + ".";
    }

    if (score === 5) {
        document.getElementById("div-questions").style.display = "none";
        document.getElementById("div-success").style.display = "block";
    }

    generateQuestion();
}

generateQuestion();