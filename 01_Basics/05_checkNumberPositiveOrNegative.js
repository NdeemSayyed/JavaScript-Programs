const checkNumberPositiveOrNegative = (num) => {
    if (num === 0) {
        console.log(`${num} The number is zero`);
    } else if (num < 0) {
        console.log(`${num} The number is negative`);
    } else if (num > 0) {
        console.log(`${num} The number is positive`);
    } else {
        console.log(` ${num} is not a number`)
    }
}

checkNumberPositiveOrNegative(4);
checkNumberPositiveOrNegative(-5);
checkNumberPositiveOrNegative(0);
checkNumberPositiveOrNegative("zero");
checkNumberPositiveOrNegative("five");

// Output :
// 4 The number is positive
// -5 The number is negative
// 0 The number is zero
//  zero is not a number
//  five is not a number
