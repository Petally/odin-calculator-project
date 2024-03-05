// Main calculator logic
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => {
    if (a !== 0 && b !== 0) {
        return a / b;
    } else {
        return null;
    }
}

let operate = (firstNumber, operator, secondNumber) => {
    firstNumber = parseInt(firstNumber);
    secondNumber = parseInt(secondNumber);

    if (operator === '+') {
        return add(firstNumber, secondNumber);
    } else if (operator === '-') {
        return subtract(firstNumber, secondNumber);
    } else if (operator === '*') {
        return multiply(firstNumber, secondNumber);
    } else if (operator === '/') {
        return divide(firstNumber, secondNumber);
    }
};

let firstNumber = null;
let secondNumber = null;
let operator = null;

const display = document.querySelector('.display');
let updateDisplay = () => {
    // Remove 'undefined' from non-existent values
    const string = `${firstNumber} ${operator} ${secondNumber}`;
    const processedString = string.split(' ').filter(string => string !== 'null').join(' ');
    display.innerText = processedString;
};

let handleNumBtnPress = (btn) => {
    if (!operator) {
        firstNumber = firstNumber ? `${firstNumber}${btn.innerText}` : btn.innerText;
    } else {
        secondNumber = secondNumber ? `${secondNumber}${btn.innerText}` : btn.innerText;
    }
    updateDisplay();
};

let handleOperatorBtnPress = (btn) => {
    if (operator || !firstNumber) return;
    const dict = {
        divideBtn: '/',
        subtractBtn: '-',
        multiplyBtn: '*',
        addBtn: '+',
    };

    operator = dict[btn.id];
    updateDisplay();
}

let clearCalculator = () => {
    firstNumber = null;
    secondNumber = null;
    operator = null;
    updateDisplay();
};

let handleEqualsBtnPress = () => {
    if (!firstNumber || !operator || !secondNumber) return;
    firstNumber = operate(firstNumber, operator, secondNumber);
    operator = null;
    secondNumber = null;
    updateDisplay();

    if (!firstNumber) {
        display.innerText = 'Crisis averted!';
    }
}

const numBtns = document.querySelectorAll('.numBtn');
numBtns.forEach(element => {
    element.addEventListener('click', (e) => { handleNumBtnPress(e.target); });
});

const opBtns = document.querySelectorAll('.opBtn');
opBtns.forEach(element => {
    element.addEventListener('click', (e) => { handleOperatorBtnPress(e.target); });
});

const clearBtn = document.querySelector('#clearBtn');
clearBtn.addEventListener('click', (e) => { clearCalculator(); });

const equalsBtn = document.querySelector('#equalsBtn');
equalsBtn.addEventListener('click', (e) => { handleEqualsBtnPress(); });
