// An anagram means both strings contain the same letters with the same frequency, just in a different order.

// Example:

// "listen" and "silent" ✅
// "heart" and "earth" ✅
// "cat" and "bat" ❌

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().split("").sort().join("");
    str2 = str2.toLowerCase().split("").sort().join("");

    return str1 === str2;
}

console.log(isAnagram("listen", "silent"));
//output:
// true

console.log(isAnagram("cat", "bat"));
//output
// false
