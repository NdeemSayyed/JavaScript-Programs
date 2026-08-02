const checkEvenOrOdd = (num) => {
    if (num % 2 == 0) {
        console.log(` The number is even ${num}`)
    } else {
        console.log(` The number is odd ${num}`)
    }
}

checkEvenOrOdd(5);
// output :  The number is odd 5

checkEvenOrOdd(2456);
// output :  The number is  even 2456


for (i = 1; i <= 10; i++){
     if (i % 2 == 0) {
        console.log(` The number is even ${i}`)
    }
}

//Output :
//  The number is even 2
//  The number is even 4
//  The number is even 6
//  The number is even 8
//  The number is even 10



for (i = 1; i <= 10; i++){
     if (i % 2 !== 0) {
        console.log(` The number is odd ${i}`)
    }
}
//Output
//  The number is odd 1
//  The number is odd 3
//  The number is odd 5
//  The number is odd 7
//  The number is odd 9