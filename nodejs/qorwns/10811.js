const fs = require('fs')
const input = fs.readFileSync('./예제.txt').toString().trim().split('\r\n')

const [N, M] = input[0].split(' ')
let solve = Array.from({ length: N }, (_, i) => i + 1)

for (let i = 1; i <= M; i++) {
   let [iIndex, jIndex] = input[i].split(' ')

   newArr = solve.slice(iIndex - 1, jIndex).reverse()
   count = 0
   for (let j = iIndex - 1; j <= jIndex - 1; j++) {
      solve[j] = newArr[count++]
   }
}
console.log(solve.join(' '))

// splice(iIndex-1, jIndex, ...newArr) => ... 전개연산자 활용
