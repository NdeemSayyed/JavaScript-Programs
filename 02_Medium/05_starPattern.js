// Square Pattern
let n = 4;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
        row += "* ";
    }
    console.log(row);
}

// Output :
// * * * *
// * * * *
// * * * *
// * * * *


// Right angled triangle pattern

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// Output :
// *
// * *
// * * *
// * * * *
// * * * * *


// Inverted Right angle

let n = 5;

for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}

// output :
// * * * * *
// * * * *
// * * *
// * *
// *


// Left Traingle

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
        row += "  ";
    }

    for (let k = 1; k <= i; k++) {
        row += "* ";
    }

    console.log(row);
}

// Output:
//         *
//       * *
//     * * *
//   * * * *
// * * * * *


// Pyramid Pattern

let n = 5;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    for (let k = 1; k <= i; k++) {
        row += "* ";
    }

    console.log(row);
}

// Output :
//     *
//    * *
//   * * *
//  * * * *
// * * * * *



// Inverted Pyramid 
let n = 5;

for (let i = n; i >= 1; i--) {
    let row = "";

    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    for (let k = 1; k <= i; k++) {
        row += "* ";
    }

    console.log(row);
}

// Output :
// * * * * *
//  * * * *
//   * * *
//    * *
//     *



// Floyd's Triangle 
let n = 5;
let num = 1;

for (let i = 1; i <= n; i++) {
    let row = "";

    for (let j = 1; j <= i; j++) {
        row += num + " ";
        num++;
    }

    console.log(row);
}

//Output ;
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15