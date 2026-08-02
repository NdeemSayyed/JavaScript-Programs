// 1. Using a for Loop (Most Common in Interviews)

let arr = [10, 5, 25, 8, 2, 18];
function findLargestSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }

        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    console.log("Largest:", largest);
    console.log("Smallest:", smallest);
}

findLargestSmallest(arr);
// Output
// Largest: 25
// Smallest: 2



// 2. Using Built-in Methods
let arr2 = [10, 5, 25, 8, 2, 18];

let largest = Math.max(...arr2);
let smallest = Math.min(...arr2);

console.log("Largest:", largest);
console.log("Smallest:", smallest);
// Output
// Largest: 25
// Smallest: 2


// Using sort() (Built-in Method)
let arr3 = [10, 5, 25, 8, 2, 18];
console.log(` Original Array ${arr3}`);

arr3.sort((a, b) => b - a);

console.log(` Second largest element in an array is : ${arr3[1]}` );
// output:
//  Original Array 10,5,25,8,2,18
//  Second largest element in an array is : 18

// Using sort() (Built-in Method)
let arr4 = [10, 5, 25, 8, 2, 18];
console.log(` Original Array ${arr3}`);

arr3.sort((a, b) => a - b);

console.log(` Second smallest element in an array is : ${arr3[1]}` );
// output:
//  Original Array 25,18,10,8,5,2
//  Second smallest element in an array is : 5