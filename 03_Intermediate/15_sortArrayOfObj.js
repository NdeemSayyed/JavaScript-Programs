// . Sort Array of Objects
let users = [
    { name: "John", age: 30 },
    { name: "Sam", age: 20 },
    { name: "Mike", age: 25 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);
//output:
// [
//   { name: 'Sam', age: 20 },
//   { name: 'Mike', age: 25 },
//   { name: 'John', age: 30 }
// ]


// Ascending Order (A → Z)
let users = [
    { name: "John", age: 30 },
    { name: "Sam", age: 20 },
    { name: "Mike", age: 25 }
];

users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);

// Output

// [
//   { name: 'John', age: 30 },
//   { name: 'Mike', age: 25 },
//   { name: 'Sam', age: 20 }
// ]