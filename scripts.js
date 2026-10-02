let num1, num2, operator, correctAnswer;
let score = 0;

const operators = ["+", "-", "*"];

function generateProblem() {
    num1 = Math.floor(10 * Math.random());
    num2 = Math.floor(10 * Math.random());
    operator = operators[Math.floor(3 * Math.random())];
    
    switch (operator) {
        case "+": correctAnswer = num1 + num2; break;
        case "-": correctAnswer = num1 - num2; break;
        case "*": correctAnswer = num1 * num2; break;
    }
}

function checkAnswer() {
    const button = document.getElementById("answerButton");

    button.addEventListener("click", function() {
        const ans = Number(document.getElementById("answer").value);
        
        if (ans === correctAnswer) {
            // if correct - change HTML
        }

        // else - ...

    })
}