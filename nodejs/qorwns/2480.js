const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').toString().trim().split(' ').map(Number)

let reward
let same
let input2 = []
let max = 0
// 중복 제거, 같은값 저장, 최댓값 구하기
for (let i in input) {
   if (input2.indexOf(input[i]) == -1) {
      input2.push(input[i])
   } else {
      same = input[i]
   }
   if (input2[i] > max) {
      max = input2[i]
   }
}
// 중복 제거한 array의 길이에 따라
switch (input2.length) {
   case 1:
      reward = 10000 + same * 1000
      break
   case 2:
      reward = 1000 + same * 100
      break
   case 3:
      reward = max * 100
      break
}
console.log(reward)
