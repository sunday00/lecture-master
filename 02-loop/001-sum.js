let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString()
let input = fs.readFileSync('./example.txt').toString()

let s = 0
for(let i=1; i<=Number(input); i++) {
  s += i
}

console.log(s)

// TIP:
console.log(Number(input) * (Number(input)  + 1) / 2)
