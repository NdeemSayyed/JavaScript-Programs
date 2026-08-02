// Group Objects by Property
let users = [
    { name: "John", age: 20 },
    { name: "Sam", age: 20 },
    { name: "Mike", age: 25 }
];

let grouped = users.reduce((acc, obj) => {
    (acc[obj.age] = acc[obj.age] || []).push(obj);
    return acc;
}, {});

console.log(grouped);

//Output
// {
//   '20': [ { name: 'John', age: 20 }, { name: 'Sam', age: 20 } ],
//   '25': [ { name: 'Mike', age: 25 } ]
// }