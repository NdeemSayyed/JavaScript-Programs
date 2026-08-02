// Swap two number using a third variable
let a = 10;
let b = 20;

temp = a;
a = b
b = temp

console.log(` The value of a and b after swap using third variable is  ${a} and ${b}`);
//Output :  The value of a and b after swap using third variable is  20 and 10



// swap two number using destructuring method
function swap(i,j) {
    [i, j] = [j, i];
    console.log(`The value of i and j after swap using destructuring  is  ${i} and ${j}`)
}

swap(100, 200);
//Output : The value of i and j after swap using destructuring  is  200 and 100
