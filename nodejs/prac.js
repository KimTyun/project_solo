const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '예제.txt')
const input = Number(fs.readFileSync(filePath).toString().trim())

console.log(input)

1, 2, 4, 7, 11
