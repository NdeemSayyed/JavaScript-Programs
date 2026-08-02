// Intersection of Two Arrays
let arr1 = [1, 2, 3, 4];
let arr2 = [3,4,5,6];

let result = arr1.filter(item => arr2.includes(item));

console.log(result);

//Output: 
Output

// [3,4]