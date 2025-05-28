const fs = require('fs')
const input = fs.readFileSync('./예제.txt').toString().trim()

const array = [...input.toUpperCase()].sort()

const newArr = Array.from(new Set(array)) //중복없는 배열
const solve = [] //각 알파뱃의 갯수를 담을 배열

// 각 알파벳 종류마다
for (let i in newArr) {
   let count = 0
   //그 알파벳이 몇갠지
   for (let j of array) {
      if (newArr[i] == j) {
         count++
      } else {
         array.splice(0, count)
         break
      }
   }
   solve[i] = count
}

const max = Math.max(...solve)
const answer = newArr[solve.indexOf(max)]
solve.splice(solve.indexOf(max), 1)
const nextMax = Math.max(...solve)

console.log(max == nextMax ? '?' : answer)
