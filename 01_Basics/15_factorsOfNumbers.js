function getFactors(number) {
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            console.log(`Number ${i} is a factor of ${number}`);
        }
    }

    // A number is always a factor of itself
    console.log(`Number ${number} is a factor of ${number}`);
}

let num = 100;
getFactors(num);

// output
// Number 1 is a factor of 100
// Number 2 is a factor of 100
// Number 4 is a factor of 100
// Number 5 is a factor of 100
// Number 10 is a factor of 100
// Number 20 is a factor of 100
// Number 25 is a factor of 100
// Number 50 is a factor of 100
// Number 100 is a factor of 100