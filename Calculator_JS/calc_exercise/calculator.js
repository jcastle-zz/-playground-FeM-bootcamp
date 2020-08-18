/*
Requirements:
1. runningTotal - Need to have a running total.
2. buffer - Need to have a buffer to represent what's on the screen at any given time.
3. previousOperator - Need to keep state, keep track of previous actions. Represents operator (+, -, =).

*/

let runningTotal = 0;
let buffer = '0';
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        // this is not a number
        handleSymbol(value);
    } else {
        // this is a number 
        handleNumber(value);
    }
    // need to rerender screen, regardless what happens with symbol or number
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    // do different things for math operation and clear

    // could do different scenarios with if else
    // if (symbol === 'C') {
    //     buffer = '0';
    //     runningTotal = 0;
    // }

    // not common in JS but using switch for demo purposes

    switch (symbol) {
        case '←': 
            if (buffer.length === 1) {
                buffer = '0';
            } else {
                buffer.substring(0, buffer.length - 1);
            }
        case 'c':
            buffer = '0';
            runningTotal = 0;
            break;
        case '=':
            if (previousOperator === null) {
                // need two numbers to do math
                return;
            }
            flushOperation(parseInt(buffer));
            previousOperator = null;
            buffer = runningTotal;
            runningTotal = 0;
            break;
        case '+':
            // need to have function to handle math
            handleMath(symbol);
            break;
        case '-':
        case '⨉':
        case '÷':
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        // do nothing
        return;
    }

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
    } else if (previousOperator === '-') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '⨉') {
        runningTotal *= intBuffer;
    } else {  
        runningTotal /= intBuffer;
    } 
}

function handleNumber(numberString) {
    // works for all numbers except 0
    if (buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
}

function init() {
    // function that sets up listeners
    document.querySelector('.calc-buttons')
        .addEventListener('click', function (e) {
            buttonClick(e.target.innerText);
        })
}

init(); 