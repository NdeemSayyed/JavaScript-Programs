// Find a square of a number
function squareOfNumber(num) {
    return num * num;
}

console.log(` The square of a number 5 = ${squareOfNumber(5)}`);
// Output :  The square of a number 5 = 25



// Fnd Square of Number from 1 to 10 using for loop
function printSquare() {
    for (i = 1; i <= 10; i++) {
        console.log(` The Square of Number ${i} = ${ i * i} `)
    }
}

printSquare();
// Output
//  The Square of Number 1 = 1
//  The Square of Number 2 = 4
//  The Square of Number 3 = 9
//  The Square of Number 4 = 16
//  The Square of Number 5 = 25
//  The Square of Number 6 = 36
//  The Square of Number 7 = 49
//  The Square of Number 8 = 64
//  The Square of Number 9 = 81
//  The Square of Number 10 = 100 



// Fnd Square of Number from 1 to 10 using while loop
function printSquareUsingWhile() {
    let i = 1;
    while (i <= 10) {
        console.log(` The Square of Number ${i} = ${i * i} `)
        i++;
    }
}
printSquareUsingWhile();
// Output
//  The Square of Number 1 = 1
//  The Square of Number 2 = 4
//  The Square of Number 3 = 9
//  The Square of Number 4 = 16
//  The Square of Number 5 = 25
//  The Square of Number 6 = 36
//  The Square of Number 7 = 49
//  The Square of Number 8 = 64
//  The Square of Number 9 = 81
//  The Square of Number 10 = 100 



// Fnd Square of Number from 1 to 10 using while loop
function printSquareUsingDoWhile() {
    let i = 1;
    do {
        console.log(` The Square of Number ${i} = ${i * i} `)
        i++;
    } while (i <= 10);
}

printSquareUsingDoWhile();
// Output
//  The Square of Number 1 = 1
//  The Square of Number 2 = 4
//  The Square of Number 3 = 9
//  The Square of Number 4 = 16
//  The Square of Number 5 = 25
//  The Square of Number 6 = 36
//  The Square of Number 7 = 49
//  The Square of Number 8 = 64
//  The Square of Number 9 = 81
//  The Square of Number 10 = 100




//Passing Range as parameter
// Fnd Square of Number from 1 to 10 using for loop
function printSquareUsingRange(start, end) {
    for (i = start; i <= end; i++) {
        console.log(` The Square of Number ${i} = ${ i ** 2} `)
    }
}

printSquareUsingRange(1, 25);
// Output:
//  The square of Number 1 = 1 
//  The Square of Number 2 = 4 
//  The Square of Number 3 = 9 
//  The Square of Number 4 = 16 
//  The Square of Number 5 = 25 
//  The Square of Number 6 = 36 
//  The Square of Number 7 = 49 
//  The Square of Number 8 = 64 
//  The Square of Number 9 = 81 
//  The Square of Number 10 = 100 
//  The Square of Number 11 = 121 
//  The Square of Number 12 = 144 
//  The Square of Number 13 = 169 
//  The Square of Number 14 = 196 
//  The Square of Number 15 = 225 
//  The Square of Number 16 = 256 
//  The Square of Number 17 = 289 
//  The Square of Number 18 = 324 
//  The Square of Number 19 = 361 
//  The Square of Number 20 = 400 
//  The Square of Number 21 = 441 
//  The Square of Number 22 = 484 
//  The Square of Number 23 = 529 
//  The Square of Number 24 = 576 
//  The Square of Number 25 = 625


// Find square root of a number

let number = 121
function findSquareRoot(num) {
    return Math.sqrt(num);
}
console.log(`The square of a number ${number} = ${findSquareRoot(number)}`);
//Output : The square of a number 121 = 11

// without using variable u can use direct as arguments
console.log(`The square of a number  = ${findSquareRoot(225)}`);
//Output: The square of a number  = 15



// Find the square root of a number for decimal place round it to 2 decimal
let squareRootNum = 75
function findSquareRootOfNonSquareNumber(num) {
    return Math.sqrt(num).toFixed(2);
}

// using variable define outside function
console.log(`The square of a number ${squareRootNum} = ${findSquareRootOfNonSquareNumber(squareRootNum)}`);
//Output: The square of a number 75 = 8.66


// without using variable u can use direct as arguments
console.log(`The square root of a number  = ${findSquareRootOfNonSquareNumber(200)}`);
//Output : The square root of a number  = 14.14
