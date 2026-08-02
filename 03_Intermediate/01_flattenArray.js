// 1. Flatten One Level (flat(1))
let arr = [1, [2, 3], [4, [5, 6]]];

let result = arr.flat(1);

console.log(result);

// Output :
// [1, 2, 3, 4, [5, 6]]
// Only the first level is flattened.

// 2. Flatten Two Levels (flat(2))
let arr2 = [1, [2, 3], [4, [5, 6]]];

let result1 = arr2.flat(2);

console.log(result1);

// Output:
// [1, 2, 3, 4, 5, 6]
// The first and second levels are flattened.

// 3. Flatten All Levels (flat(Infinity))
let arr3 = [1, [2, 3], [4, [5, [6, 7]]]];

let result2 = arr3.flat(Infinity);

console.log(result2);

// Output:
// [1, 2, 3, 4, 5, 6, 7]



