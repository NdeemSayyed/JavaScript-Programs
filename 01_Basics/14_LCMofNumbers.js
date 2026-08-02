let num1 = 3;
let num2 = 6;

function getLCM() {
    let lcm = num1 > num2 ? num1 : num2;

    while (true) {
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            break;
        }
        lcm++;
    }

    return lcm;
}

console.log(`LCM of numbers ${num1} and ${num2} is ${getLCM(num1, num2)}`);

// Output :
// LCM of numbers 3 and 6 is 6