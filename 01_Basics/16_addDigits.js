// Using a while Loop (Most Common)
function sumOfDigits(num) {
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    return sum;
}

console.log(` Sum of digits of ${num} is ${sumOfDigits(1234)}`);
//output
// 10