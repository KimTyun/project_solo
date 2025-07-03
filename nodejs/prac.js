const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, '예제.txt')
const input = Number(fs.readFileSync(filePath).toString().trim())

console.log(input)

// 1,1+6,1+6+6*1,1+6+6*2 ...
let sol = 1
for (let i = 1; true; i++) {
   break
}
