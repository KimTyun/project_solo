const fs = require('fs')
const input = fs
   .readFileSync('./예제.txt')
   .toString()
   .trim()
   .split('\r\n')
   .map((e) => Number(e) % 42)

console.log(new Set(input).size)
