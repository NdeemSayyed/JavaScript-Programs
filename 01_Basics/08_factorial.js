// What is Factorial ?
// The Factorial of a number is the product of all positive integers from 1 to that number(n)


const factorial = (number) => {
    if (number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
    // factorial(3) = number * factorial(number -1 )
    // factorial(3) = 3 * factorial (3-1)
    // factorial(3) = 3 * factorial (2)
    // factorial(3) = 3 * number * factorial(number -1 )
    // factorial(3) = 3 * 2 * factorial(2 -1 )
    // factorial(3) = 3 * 2 * factorial(1)
    // factorial(3) = 3 * 2 * 1
    
}

console.log(` The factorial of Number : ${factorial(3)}`);

//Output :  The factorial of Number : 6


// Factorial using for loop

const findFactorial = (num) => {
    let factorial = 1;

    for (let i = 1; i <= num; i++){
        factorial *= i;
        // factorial = factorial * i
    }

    console.log(` The factorial of num ${num} is a ${factorial} `)
}

findFactorial(5)

// Output :  The factorial of num 5 is a 120 