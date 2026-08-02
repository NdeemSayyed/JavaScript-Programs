// Merge Two Arrays Without Duplicates
let arr1 = [1, 2, 3];
let arr2 = [3, 4, 5];

let result = [...new Set([...arr1, ...arr2])];

console.log(result);

// Output :
// [1,2,3,4,5]