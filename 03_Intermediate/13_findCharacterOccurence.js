// Count Character Occurrence
function countChar(str){
    let obj = {};

    for(let char of str){
        obj[char] = (obj[char] || 0)+1;
    }

    return obj;
}

console.log(countChar("programming"));

//Output:
// { p: 1, r: 2, o: 1, g: 2, a: 1, m: 2, i: 1, n: 1 }