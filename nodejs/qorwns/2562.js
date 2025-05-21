const fs = require('fs')
const input = fs.readFileSync('./예제.txt').toString().trim().split('\r\n').map(Number)

let max = input[0]
let c = 1
for (let i in input) {
   if (input[i] > max) {
      max = input[i]
      c = Number(i) + 1
   }
}
console.log(max + '\n' + c)
