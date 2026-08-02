// Using a while Loop (Most Common in Interviews)
function reverseNumber(num) {
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return reverse;
}

let num = 12345
console.log(` Reverse of ${num} is ${reverseNumber(num)}`);
// output:
//  Reverse of 12345 is 54321


// using built in method
function reverseNumber2(num) {
    return Number(num.toString().split("").reverse().join(""));
}

console.log(` Reverse of ${num} is ${reverseNumber(num)}`);
// output:
//  Reverse of 12345 is 54321