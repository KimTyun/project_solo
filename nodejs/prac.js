// 제출시 예제.txt - > /dev/stdin

const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim()

console.log(Number(input) - 543)
