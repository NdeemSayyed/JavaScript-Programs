let n = 7
function sumOfNumbers() {
    let sum = 0;
    for (let i = 1; i <= n; i++){
        sum += i;  // sum = sum+i
    }
    return sum;
}

console.log(`Sum of first ${n} numbers is ${sumOfNumbers(n)}`);

// Output :
// Sum of first 7 numbers is 28


// using formula

let num = 10
function sumOfNumbers(num) {
   
    return num * (num + 1)/2;
}

console.log(`Sum of first ${num} numbers is ${sumOfNumbers(num)}`);

// Output:
// Sum of first 10 numbers is 55