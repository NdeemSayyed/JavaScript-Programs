// 1. Using a for Loop (Simple Interview Solution)
// Example: Find the missing number in [1, 2, 3, 5].

function findMissingNumber(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] !== arr[i] + 1) {
            return arr[i] + 1;
        }
    }
}

let arr = [1, 2, 3, 5];
console.log(findMissingNumber(arr));

// Output:
// 4

// using formula

function missingNumber(arr) {
    let n = arr.length + 1;

    let expected = (n * (n + 1)) / 2;
    let actualNum = arr.reduce((sum, num) => sum + num, 0);

    return expected - actualNum;
}

let arr2 = [1, 2, 3, 5];

console.log(`The missing number is: ${missingNumber(arr2)}`);
//Output:
// The missing number is: 4
