console.log('intro to JS')

// Primitives - strings, booleans, numbers - cannot be split
// Strings
const myName = `Joe Castle`;
// template string vs concatenated string
const sentence = `Hello, my name is ${myName}.`
// console.log(myName);
// console.log(sentence);

// Booleans - true or false
const isTheSkyBlue = true;

// Numbers - only value in JS is number, no float
const number = 5;

// Control Flow & Loops
// Control flow
const isSkyBlue = true;

// Conditional or if statement for doing logic
if (isSkyBlue) {
    // this block is true so it will run
    console.log('The sky is blue');
} else {
    // this never runs, don't need an else block
    console.log('This sky is not blue');
}

// Equality comparison
// One '=' for assignment, three '===' for equality comparison
// Can do coercion but usually don't want to. This is possible with '=='
if (2 + 2 === 4) {
    console.log('Hooray for math');
} else {
    console.log('Not hooray for math');
}

// Else if - allows for a third condition, or potentially more
// Looks for the first one that is true and executes then moves on to next block/function of code
// Will skip ever line if not true, even the else statement
const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
    console.log('Cool, I have all the nachos');
} else if (friendsAtYourParty <= 4) {
    console.log('We can play Mario Cart');
} else {
    console.log('Play the dance music');
}

// Loops
let friendsAtYourParty2 = 0;

friendsAtYourParty2 += 1;
friendsAtYourParty2 += 1;
friendsAtYourParty2 += 1;
friendsAtYourParty2 += 1;
console.log(friendsAtYourParty2); // 4, this is reason for loop

let friendsAtYourParty3 = 10;

while (friendsAtYourParty3 < 10) {
    friendsAtYourParty3 = friendsAtYourParty3 + 1;
}
console.log(friendsAtYourParty3); // will keep looping until it adds up to 10

// Incrementing - '+=', '*=', '-=', '/='
// ++friendsAtYourParty4 // adds one, don't usually see this
// friendsAtYourParty4++ // adds one, preferred way

// Incrementing in Loops
let friendsAtYourParty5 = 0;

for (let i = 0; i < 10; i++) {
    console.log(i);
    friendsAtYourParty5++;
}
console.log(friendsAtYourParty5);

/*
Looping exercise:  
Write some code that declares two variables, character and timesToRepeact.
Using a loop, repeat that character that many times and then console.log it.
Example, if I had character = 'f' and timesToRepeat = 5, it'd console.log
'fffff'
*/
const chr = 'f';
const repeat = 5;
let myStr = '';

// loop code here
for (let i = 0; i < repeat; i++) {
    myStr += chr;
}

console.log(myStr); /// 'fffff'

// Functions & Scope
// Functions are a bit of reusable code, encapsulate logic and use it over and over again. Also called procedures and methods. More than four parameters, may want to make smaller functions.
