// 10. Find Longest Word
function longestWord(str){
    let words = str.split(" ");

    let longest = "";

    for(let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }

    return longest;
}

console.log(longestWord("JavaScript is awesome"));

// Output : 
// JavaScript