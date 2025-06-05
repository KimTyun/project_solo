const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const [value, baseN] = input

// baseN으로 나눈 몫이 baseN보다 크면 baseN**2로 나눈다. 이게 baseN보다 크면 baseN**3으로 나눈다....
// 나눠서 몫이 baseN보다 작으면 나머지를 저장한다(첫번째 자리의 값).그후 나머지를 리턴한다
// 리턴받은 나머지의 몫을 저장하면서 재귀를 나온다.
let count = 0
let solve = []

function recursion(value, baseN) {
   if (value / baseN ** count < baseN) {
      solve.push(Math.floor(value / baseN ** count)) //첫번째 자리
      if (count == 0) return
      return value % baseN ** count--
   } else {
      count++
      let a = recursion(value, baseN)
      solve.push(Math.floor(a / baseN ** count))
      if (count == 0) return
      return a % baseN ** count--
   }
}
recursion(value, baseN)

const solve2 = solve.map((e) => (e >= 10 ? String.fromCodePoint(e + 55) : e)).join('')

console.log(solve2)
