// check if a number is prime or not 
const checkPrimeNumber = (num) => {
    if (num <= 1) {
        console.log(`${num} is not a Prime Number `);
        return;
    }

    let isPrime = true;
    for (let i = 2; i < num / 2; i++){
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(` ${num} is a Prime Number`)
    } else {
        console.log(` ${num} is not a Prime Number`)
    }
}

checkPrimeNumber(77);
// Output :  77 is not a Prime Number



// check if a number is prime or not optimize solution using Math.sqrt() method
const checkPrimeNumber2 = (num) => {
    if (num <= 1) {
        console.log(`${num} is not a Prime Number `);
        return;
    }

    let isPrime = true;
    for (let i = 2; i < Math.sqrt(num); i++){
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(` ${num} is a Prime Number`)
    } else {
        console.log(` ${num} is not a Prime Number`)
    }
}

checkPrimeNumber2(7);
// Output :  7 is a Prime Number


// check prime number from 1 to 100
// check if a number is prime or not 
const printPrimeNumber = () => {

    for (let num = 2; num <= 50; num++) {
        let isPrime = true;

        for (let i = 2; i < Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`The Number ${num} is a Prime Number`)
        } 
    }
}

printPrimeNumber();

// Output: 
// The Number 2 is a Prime Number
// The Number 3 is a Prime Number
// The Number 4 is a Prime Number
// The Number 5 is a Prime Number
// The Number 7 is a Prime Number
// The Number 9 is a Prime Number
// The Number 11 is a Prime Number
// The Number 13 is a Prime Number
// The Number 17 is a Prime Number
// The Number 19 is a Prime Number
// The Number 23 is a Prime Number
// The Number 25 is a Prime Number
// The Number 29 is a Prime Number
// The Number 31 is a Prime Number
// The Number 37 is a Prime Number
// The Number 41 is a Prime Number
// The Number 43 is a Prime Number
// The Number 47 is a Prime Number
// The Number 49 is a Prime Number