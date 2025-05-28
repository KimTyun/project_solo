const fs = require('fs')
const input = fs
   .readFileSync('./예제.txt')
   .toString()
   .split('\r\n')
   .map((e) => e.split(' '))

let answer = ''
for (let i = 1; i <= input[0]; i++) {
   // 입력 각 줄마다
   let solve = []

   for (let j = 1; j <= input[i][0]; j++) {
      //정해진 횟수만큼
      for (let k = 0; k < input[i][1].length; k++) {
         //정해진 문자열의 문자 반복
         solve[k] == undefined ? (solve[k] = input[i][1][k]) : (solve[k] += input[i][1][k])
      }
   }
   answer += solve.join('') + '\n'
}
console.log(answer)

// 'str자료형'.repeat(반복횟수) => str자료형을 반복횟수만큼 반복해서 리턴
