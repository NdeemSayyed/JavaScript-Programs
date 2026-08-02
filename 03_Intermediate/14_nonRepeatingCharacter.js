// First Non-Repeating Character
function firstUnique(str){

    let obj = {};

    for(let char of str){
        obj[char]=(obj[char]||0)+1;
    }

    for(let char of str){
        if(obj[char]===1){
            return char;
        }
    }
}

console.log(firstUnique("aabbcdde"));

// Output: 
// c