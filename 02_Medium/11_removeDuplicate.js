// Using a for Loop(Without Set)
function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

let arr = [1, 2, 3, 4, 5, 6, 2, 4, 3, 5, 2, 2];

console.log(removeDuplicates(arr));
// output:
// [1, 2, 3, 4, 5, 6]


// Using Set(Easiest)
let arr2 = [1, 2, 3, 4, 5, 6, 2, 4, 3, 5, 2, 2];

let unique = [...new Set(arr2)];

console.log(unique);

// Output:
// [1, 2, 3, 4, 5, 6]

// Using filter()
let arr3 = [1, 2, 3, 4, 5, 6, 2, 4, 3, 5, 2, 2];

let uniqueNum = arr3.filter((item, index) => arr3.indexOf(item) === index);

console.log(uniqueNum);

// Output:
// [1, 2, 3, 4, 5, 6]


// find number of time duplicate array element came
let arr4 = [1, 2, 3, 4, 5, 6, 2, 4, 3, 5, 2, 2];

function findDuplicateArray(arr4) {
    let obj = {};

    for (let item of arr4) {
        obj[item] = (obj[item] || 0) + 1;
    }

    return obj;
}

console.log(findDuplicateArray(arr4));

//output:
// { '1': 1, '2': 4, '3': 2, '4': 2, '5': 2, '6': 1 }



function findDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        let found = false;

        for (let j = 0; j < i; j++) {
            if (arr[i] === arr[j]) {
                found = true;
                break;
            }
        }

        if (found) continue;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                console.log(arr[i]);
                break;
            }
        }
    }
}

let arr5 = [1, 2, 3, 4, 5, 6, 2, 4, 3, 5, 2, 2];

findDuplicates(arr5);


// Using filter()
let arr6 = [1, 2, 3, 4, 5, 6, 2, 4, 3, 5, 2, 2];

let duplicates = arr6.filter((item, index) => arr6.indexOf(item) !== index);

console.log([...new Set(duplicates)]);
// Output
// [2, 3, 4, 5]