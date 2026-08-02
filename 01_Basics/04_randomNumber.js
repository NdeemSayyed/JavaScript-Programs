// Random Decimal Number 0 to less than 1
function generateRandomNumber() {
    return Math.random();
}
console.log(` Random Number: ${generateRandomNumber()}`);
// Output :  Random Number: 0.11835991532868206


// Randdom Number between 1 and 10
function generateRandomNumber2() {
    return Math.floor(Math.random() * 10) + 1;
}
console.log(` Random Number: ${generateRandomNumber2()}`);
//Output :  Random Number: 7


// give 5 times Random number 
function generateRandomNumber3() {
    return Math.floor(Math.random() * 10) + 1;
}

for (i = 1; i <= 5; i++) {
    console.log(` Random Number: ${i} time is ${generateRandomNumber3()}`);
}

//Output :
//  Random Number: 1 time is 1
//  Random Number: 2 time is 4
//  Random Number: 3 time is 5
//  Random Number: 4 time is 1
//  Random Number: 5 time is 1



// Random Number between any two numbers
function generateRandomNumberBetweenTwoNumbers( min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(` Random Number Between Two Number is  ${generateRandomNumberBetweenTwoNumbers(30, 40)}`);
//Output :  Random Number Between Two Number is  32


// Random decimal Number between any two numbers
function generateRandomDecimalNumberBetweenTwoNumbers( min, max) {
    return ((Math.random() * (max - min + 1)) + min).toFixed(2);
}
console.log(` Random Decimal Number Between Two Number is  ${generateRandomDecimalNumberBetweenTwoNumbers(30, 40)}`);
//Output :   Random Decimal Number Between Two Number is  37.21