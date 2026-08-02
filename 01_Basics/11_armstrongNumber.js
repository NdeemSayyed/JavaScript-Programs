// what is Armstrong number ?
// An Armstrong Number is a number in which the sum of each digit raised to the power of the total number of digits is equal to the original number

const checkArmstrong = (num) => {
    let originalNum = num;
    let sum = 0;
    let digits = num.toString().length;

    while (num > 0) {
        let digit = num % 10;
        sum = sum + digit ** digits;
        num = Math.floor(num / 10);
    }

    if (sum === originalNum) {
        console.log(`${originalNum} is an Armstrong Number`);
    } else {
        console.log(`${originalNum} is not an Armstrong Number`);
    }
};

checkArmstrong(153);
// 153 is an Armstrong Number

checkArmstrong(205);
// 205 is not an Armstrong Number


// Print Armstrong Number from 1 to 1000

const printarmstrong = () => {
    for (let num = 1; num <= 1000; num++){
        let originalNum = num;
        let temp = num;
        let sum = 0;
        let digits = num.toString().length;

        while (temp > 0) {
            let digit = temp % 10;
            sum = sum + digit ** digits;
            temp = Math.floor(temp / 10);
        }
        if (sum === originalNum) {
            console.log(originalNum);
            
        }
    }
}

printarmstrong();
//output
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// 153
// 370
// 371
// 407
