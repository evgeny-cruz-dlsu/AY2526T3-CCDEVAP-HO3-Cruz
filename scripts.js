let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function checkAnswer() {
    if (document.getElementById("answer").value !== "") {
        const ans = Number(document.getElementById("answer").value);

        if (ans === correctAnswer) {
            document.getElementById("message").textContent = "Correct!";
            document.getElementById("message").style.color = "green";
            score += 1;
            document.getElementById("score").textContent = String(score);
        }
        else {
            document.getElementById("message").textContent = "Wrong! Correct answer was " + String(correctAnswer) + ".";
            document.getElementById("message").style.color = "red";
        }

        if (score === 5) {
            document.getElementById("div-questions").style.display = "none";
            document.getElementById("div-success").style.display = "block";
        }

        generateQuestion();
        document.getElementById("answer").value = "";
        document.getElementById("message").style.display = "block";
    }
}

function generateQuestion() {
    num1 = Math.floor(11 * Math.random());
    num2 = Math.floor(11 * Math.random());
    operator = operators[Math.floor(3 * Math.random())];
    
    switch (operator) {
        case "+": correctAnswer = num1 + num2; break;
        case "-": correctAnswer = num1 - num2; break;
        case "*": correctAnswer = num1 * num2; break;
    }

    document.getElementById("question").textContent = String(num1) + " " + operator + " " + String(num2);
}

function playAgain() {
    document.getElementById("div-questions").style.display = "block";
    document.getElementById("div-success").style.display = "none";
    document.getElementById("message").style.display = "none";
    
    score = 0;
    generateQuestion();
    document.getElementById("answer").value = "";
    document.getElementById("score").textContent = String(score);
}

generateQuestion();