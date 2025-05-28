const fs = require('fs')
const input = fs
   .readFileSync('./예제.txt')
   .toString()
   .trim()
   .split('\r\n')
   .map((e) => e.split(' ').splice(1))
   .filter((e) => e[1] != 'P')

const grade = { 'A+': 4.5, A0: 4.0, 'B+': 3.5, B0: 3.0, 'C+': 2.5, C0: 2.0, 'D+': 1.5, D0: 1.0, F: 0 }

let sum1 = 0
let sum2 = 0
for (let i of input) {
   sum1 += Number(i[0]) * grade[i[1]]
   sum2 += Number(i[0])
}
console.log(sum1 / sum2)
