let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let n = fs.readFileSync('./example.txt').toString().trim().split('\n')
let l = n[1].split('').map(Number)

console.log(l.reduce((acc,cur) => acc+cur, 0))