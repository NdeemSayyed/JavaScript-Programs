
let num1 = 20;
let num2 = 100;

function getHCF(num1, num2) {
    let hcf = 1;

    for (let i = 1; i <= num1 && i <= num2; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            hcf = i;
        }
    }

    return hcf;
}

console.log(`HCF of numbers ${num1} and ${num2} is ${getHCF(num1, num2)}`);
// output :
// HCF of numbers 20 and 100 is 20