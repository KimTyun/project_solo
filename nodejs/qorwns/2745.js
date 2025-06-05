const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ')

const [value, baseN] = input
const valueArr = [...value].reverse()

const solve = valueArr.reduce((acc, cur, idx) => {
   let sum
   if (isNaN(cur)) {
      sum = (cur.charCodeAt(0) - 55) * baseN ** idx
   } else {
      sum = Number(cur) * baseN ** idx
   }
   return (acc += sum)
}, 0)

console.log(solve)
