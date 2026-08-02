function duplicateCharacter() {
    let characterCount = {}
    for (let i = 0; i < str.length; i++){
        let character = str[i];
        characterCount[character] = (characterCount[character] || 0) + 1
    }

    for (const key in characterCount) {
        if (characterCount[key] > 1) {
            console.log(`Duplicate character = ${key}, count= ${characterCount[key]}`);
            
        }
    }
}

let str = "Programming";
duplicateCharacter(str);

// Output :
// Duplicate character = r, count= 2
// Duplicate character = g, count= 2
// Duplicate character = m, count= 2