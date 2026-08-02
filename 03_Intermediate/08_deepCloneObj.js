// Deep Clone an Object
// Modern Method


let obj = {
    name:"John",
    address:{
        city:"Mumbai"
    }
};

let clone = structuredClone(obj);

console.log(clone);
//Output:
// { name: 'John', address: { city: 'Mumbai' } }