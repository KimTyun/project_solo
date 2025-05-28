const fs = require('fs')
const input = fs.readFileSync('./예제.txt').toString().trim().split('\r\n')

const [N, M] = input[0]

const matrixA = input.slice(1, Number(N) + 1).map((e) => e.split(' ').map(Number))
const matrixB = input.slice(Number(N) + 1).map((e) => e.split(' ').map(Number))

const solve = matrixA.map((col, i) => col.map((e, j) => (e += matrixB[i][j])).join(' ')).join('\n')

console.log(solve)
