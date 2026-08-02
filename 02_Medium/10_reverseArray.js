// using loop
arr = [1, 2, 3, 4, 5];
function reverseArray(arr) {
    let result = [];
    for (let i = arr.length - 1; i >= 0; i--){
        result.push(arr[i]);
    }
    return result;
}

console.log(`Reverse of an array is ${reverseArray(arr)}`);
// Output :
// Reverse of an array is 5,4,3,2,1

// Using reverse() method
arr1 = [1, 2, 3, 4, 5];
console.log(` Reverse of an array is ${arr.reverse()}`);
//Output
//  Reverse of an array is 5,4,3,2,1
