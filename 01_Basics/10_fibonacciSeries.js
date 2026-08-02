// What is Fibonacci series ?
//In a Fibonacci series each number is the sum of the previous two number

const printFibonacci = (num) => {
    let firstNum = 0;
    let secondNum = 1;

    for (i = 1; i <= num; i++) {
        console.log(firstNum);
        let nextNum = firstNum + secondNum;
        firstNum = secondNum;
        secondNum = nextNum;
    }
};
printFibonacci(10);

//Output 
// 0
// 1
// 1
// 2
// 3
// 5
// 8
// 13
// 21
// 34