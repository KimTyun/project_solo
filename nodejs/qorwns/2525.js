const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8').toString().trim().split('\n')

const currentTime = input[0].split(' ').map(Number)

let hour = currentTime[0]
let minute = currentTime[1]

let timer = Number(input[1])

//n시간 n분으로 오븐구이에 걸리는 시간을 나눈다
let timerHour = parseInt(timer / 60)
let timerMinute = timer % 60

// n분을 현재시간에 더한다
minute += timerMinute

// n분이 60분을 넘기면 올림처리한다
if (minute >= 60) {
   hour++
   minute -= 60
}

// n시간을 현지시간에 더한다
hour += timerHour

// 24시간을 넘기면 다시 0부터 간다
hour = hour % 24
console.log(`${hour} ${minute}`)
