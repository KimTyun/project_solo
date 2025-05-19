const fs = require('fs')
const input = fs.readFileSync('./예제.txt').toString().trim().split('\r\n')

input.splice(0, 1)
console.log(input)

for (let i of input) {
   var i1 = Number(i.split(' ')[0])
   var i2 = Number(i.split(' ')[1])
   console.log(i1 + i2)
}
