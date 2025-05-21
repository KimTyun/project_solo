const fs = require('fs')
const input = Number(fs.readFileSync(0).toString())

for (let i = 1; i <= input; i++) {
   let txt = ''
   for (let j = 1; j <= input; j++) {
      if (input - i >= j) {
         txt += ' '
      } else {
         txt += '*'
      }
   }
   console.log(txt)
}
