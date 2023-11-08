let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

// 1, 2, 4, 8, 16

console.log((2 ** (N) + 1) ** 2)
