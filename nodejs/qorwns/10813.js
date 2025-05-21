const fs = require('fs')
const input = fs.readFileSync('./예제.txt').toString().trim().split('\r\n')

const [N, M] = input[0].split(' ').map(Number)

const sol = Array(N)
   .fill('')
   .map((e, index) => index + 1)

for (let i = 1; i <= M; i++) {
   let [iBucket, jBucket] = input[i].split(' ').map(Number)
   let iValue = sol[iBucket - 1]
   let jValue = sol[jBucket - 1]

   sol[iBucket - 1] = jValue
   sol[jBucket - 1] = iValue
}
console.log(sol.join(' '))
