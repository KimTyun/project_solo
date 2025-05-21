const fs = require('fs')
const input = fs
   .readFileSync('./예제.txt')
   .toString()
   .trim()
   .split('\r\n')
   .map(Number)
   .map((e) => e % 42)

var set1 = new Set(input)

console.log(Array.from(set1).length)
