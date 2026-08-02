function isPalindromeString(str) {
    for (let i = 0; i < str.length ; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log(`${str} is Not a Palindrome`);
            return;
        }
    }

    console.log(`${str} is a Palindrome`);
}

isPalindromeString("madam");
// output
// madam is a Palindrome

isPalindromeString("hello");
// output
// hello is a not Palindrome


// using javascript Method
function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        console.log("Palindrome");
    } else {
        console.log("Not a Palindrome");
    }
}

isPalindrome("level");
// Output
// Palindrome

isPalindrome("world");
//Output
// Not a Palindrome


// to check if number is palindrome
function isPalindromeNumber(num) {
    let str = num.toString();

    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            console.log(`${num} is Not a Palindrome`);
            return;
        }
    }

    console.log(`${num} is a Palindrome`);
}

isPalindromeNumber(121);    // 121 is a Palindrome
isPalindromeNumber(12321);  // 12321 is a Palindrome
isPalindromeNumber(123);    // 123 is Not a Palindrome


// using built in method 
function isPalindromeNumber(num) {
    let str = num.toString();
    let reversed = str.split("").reverse().join("");

    if (str === reversed) {
        console.log(`${num} is a Palindrome`);
    } else {
        console.log(`${num} is Not a Palindrome`);
    }
}

isPalindromeNumber(1221); // 1221 is a Palindrome
isPalindromeNumber(1234); // 1234 is Not a Palindrome