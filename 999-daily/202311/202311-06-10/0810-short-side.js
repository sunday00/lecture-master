let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [x,y, r,h] = input.split(' ').map(Number)

// @info: logic start
// @@info: prepare for using

console.log(Math.min(x,y,(r-x),(h-y)))

