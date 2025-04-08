const fs = require("fs")

const data = fs.readFileSync("../../files/readMessage.txt","utf-8")
const newData = data.replace("Reading","Writing")

fs.writeFileSync("../../files/writeMessage.txt",newData)

console.log(newData)