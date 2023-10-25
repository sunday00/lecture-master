let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let n = fs.readFileSync('./example.txt').toString().trim().split('\n')

let l = n[0].trim().split(' ')

if(l == '') console.log(0)
else console.log(l.length)
