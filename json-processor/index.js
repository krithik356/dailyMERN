const fs = require("fs");
require("dotenv").config();

const inputFile = process.env.INPUT_FILE;
const outputFile = "result.json";

const data = fs.readFileSync(inputFile, "utf-8");

const users = JSON.parse(data);

const processedData = users.map((user) => {
    return {
        name: user.name,
        age: user.age,
        city: user.city,
        isAdult: user.age >= 18
    };
});

const output = JSON.stringify(processedData, null, 2);

fs.writeFileSync(outputFile, output);

console.log("JSON processing completed!");
console.log(`Input: ${inputFile}`);
console.log(`Output: ${outputFile}`);