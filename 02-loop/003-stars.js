let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString()
// let n = fs.readFileSync('./example.txt').toString()

for(let i=1; i<=Number(n); i++) {
  console.log('*'.repeat(i))
}