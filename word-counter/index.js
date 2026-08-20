const fs = require("fs");
require("dotenv").config();

const inputFile = process.env.INPUT_FILE;


const data = fs.readFileSync(inputFile, "utf-8");


const words = data.toLowerCase().match(/\b[a-z]+\b/g) || [];


const totalWords = words.length;


const wordCount = {};

for (const word of words) {
    wordCount[word] = (wordCount[word] || 0) + 1;
}


const top5 = Object.entries(wordCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

let result = `Total words: ${totalWords}\n\n`;

result += "Top 5 repeated words:\n";

for (const [word, count] of top5) {
    result += `${word}: ${count}\n`;
}

fs.writeFileSync("result.txt", result);

console.log("Word counting completed!");
console.log(`Input: ${inputFile}`);
console.log("Output: result.txt");