// Main calculator logic
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

let operate = (firstNumber, operator, secondNumber) => {
    if (operator === 'add') {
        return add(firstNumber, secondNumber);
    } else if (operator === 'subtract') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === 'multiply') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === 'divide') {
        return divide(firstNumber, secondNumber);
    }
};

let firstNumber = 0;
let secondNumber = 0;
let operator = 'add';
