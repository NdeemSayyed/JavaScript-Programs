// Remove Falsy Values
let arr = [0, false, null, "", 5, undefined, 10, NaN];

let truthyValues = arr.filter(Boolean);
let falsyValues = arr.filter(item => !item);

console.log("Original Array:", arr);
console.log("Falsy Values:", falsyValues);
console.log("After Removing Falsy Values:", truthyValues);

// Output
// Original Array: [0, false, null, "", 5, undefined, 10, NaN]

// Falsy Values:
// [0, false, null, "", undefined, NaN]

// After Removing Falsy Values:
// [5, 10]