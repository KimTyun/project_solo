const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const N = input[0]

const white = Array.from({ length: 100 }, () => new Array(100).fill(0))

for (let i = 1; i <= N; i++) {
   const [x, y] = input[i].split(' ').map(Number)
   for (let j = x - 1; j < x + 9; j++) {
      white[j].splice(y - 1, 10, ...[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) //splice보다 이중for문이 대게 빠름
   }
}

const solve = white.reduce((p, e) => (p += e.reduce((p, e) => (p += e), 0)), 0)

console.log(solve)
