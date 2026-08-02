// Convert Array into Object
let arr = ["a","b","c"];

let obj = {};

arr.forEach((item,index)=>{
    obj[index]=item;
});

console.log(obj);

// Output

// {
// 0:"a",
// 1:"b",
// 2:"c"
// }