console.log('calculator.js file');

/*
Requirements:
1. runningTotal - Need to have a running total.
2. buffer - Need to have a buffer to represent what's on the screen at any given time.
3. previousOperator - Need to keep state, keep track of previous actions. Represents operator (+, -, =).

*/

let runningTotal = 0;
let buffer = '0';
let previousOperator = '';

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
    if (symbol === 'C') {
        buffer = '0';
        runningTotal = 0;
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