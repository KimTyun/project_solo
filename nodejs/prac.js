const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '예제.txt')
const input = fs.readFileSync(filePath).toString().split('#')

console.log(input)
