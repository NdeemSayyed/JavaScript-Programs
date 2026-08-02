// . Rotate Array by K Positions
function rotate(arr, k) {
    k = k % arr.length;

    return [...arr.slice(-k), ...arr.slice(0, -k)];
}

console.log(rotate([1,2,3,4,5],2));

// Output

// [4,5,1,2,3]