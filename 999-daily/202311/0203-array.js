let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, DATA, T] = input.split('\n')
// let N = (+input)
// let DATA = input.split('\n')

// @info: logic start
// @@info: prepare for using

console.log(DATA.split(' ').filter(d => d === T).length)
