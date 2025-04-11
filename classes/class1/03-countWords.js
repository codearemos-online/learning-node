const fs = require("fs");

const data = fs.readFileSync("../../files/readMessage.txt","utf-8");

const words = data.split(" ");

const wordReading = words.filter((word) => word === "Reading");

console.log("Total words in the file are: ",words.length)
console.log("Total reading words in the file are: ",wordReading.length)
