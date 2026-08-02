function sortWords(sentence) {
    return sentence
        .toLowerCase()
        .split(" ")
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .join(" ");
}

let sentence = "Cat apple Zebra ball";
console.log(sortWords(sentence));
// output
// apple ball Cat Zebra