let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let N = Number(input)
let [INFO, DATA] = input.split('\n')

// @info: logic start
// @@info: prepare for using

let [N, X] = INFO.split(' ').map(Number)
console.log(DATA.split(' ').filter(d => Number(d) < X).join(' '))
