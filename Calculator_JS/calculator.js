/*
Requirements:
1. runningTotal - Need to have a running total.
2. buffer - Need to have a buffer to represent what's on the screen at any given time.
3. previousOperator - Need to keep state, keep track of previous actions. Represents operator (+, -, =).

*/

let runningTotal = 0;
let buffer = '0';
let previousOperator;

const screen = document.querySelector('.screen');

// Something happens when clicking a button
function buttonClick(value) {
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value);
    } else {
        // this is a number
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    console.log('handleSymbol', symbol);
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = '0';
            break;
        // addition
        case '+':
            break;
        // subtraction
        case '−':
            break;
        // multiplication
        case '×':
            break;
        // division
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        // do nothing
        return;
    } 

    // parseInt(buffer) could also be written as +buffer
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;
    
    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '−') {
        runningTotal -+ intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }

}

function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else {
        // buffer = buffer + numberString;
        buffer += numberString;
    }
}

// This function gets called once and set's everything up
function init() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function (e) {
        buttonClick(e.target.innerText);
    })
}

init();