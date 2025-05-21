const fs = require('fs')
const input = fs.readFileSync('./예제.txt').toString().trim().split('\r\n')

let NM = input[0].split(' ').map(Number)
input.splice(0, 1)
let sol = []
for (let i = 1; i <= NM[0]; i++) {
   sol.push(0)
}
// console.log(sol) 바구니에 공없는 상태 (모든 바구니에 빈공 상태임을 명시하기)

for (let ele of input) {
   let ele2 = ele.split(' ').map(Number)

   // i,j,k 지정하기
   let start = ele2[0]
   let end = ele2[1]
   let value = ele2[2]

   // start번 바구니부터 end번 바구니까지 value공으로 바꾸기
   for (let i = 1; i <= NM[0]; i++) {
      if (start <= i && i <= end) {
         sol[i - 1] = value
      }
   }
   console.log(sol.join(' '))
}
