function sortArrayInAscending(arr) {
    let length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }

    console.log(`Sorted array = [${arr}]`);
}

let arr = [5, 4, 3, 2, 1];
console.log(`Original array = [${arr}]`);

sortArrayInAscending(arr);
// output:
// Original array = [5,4,3,2,1]
// Sorted array = [1,2,3,4,5]




function sortArrayInDescending(arr1) {
    let length = arr1.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr1[i] < arr1[j]) {
                [arr1[i], arr1[j]] = [arr1[j], arr1[i]];
            }
        }
    }

    console.log(`Sorted array = [${arr1}]`);
}

let arr1 = [5, 4, 3, 2, 1];
console.log(`Original array = [${arr1}]`);

sortArrayInDescending(arr1);
//output
// Original array = [5,4,3,2,1]
// Sorted array = [5,4,3,2,1]


// Built in method
let arr3 = [30, 10, 50, 20, 40];

console.log(arr3.sort((a, b) => a - b)); // Ascending
// [10, 20, 30, 40, 50]

console.log(arr3.sort((a, b) => b - a)); // Descending
// [50, 40, 30, 20, 10]