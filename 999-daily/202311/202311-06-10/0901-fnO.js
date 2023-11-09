let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let data = input.split('\n')
// @info: logic start
// @@info: prepare for using

let [a1, a0] = data[0].split(' ').map(Number)
let c = +data[1]
let n = +data[2]

if(a0 < 0) n = n - a0

function fn () {
    return a1*n + a0
}


function gn () {
    return c * n
}

console.log(fn() <= gn() ? 1 : 0)
