let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

let i=0;
let number = 0
while (i < N) {
    number++

    if(String(number).includes('666')) i++
}

console.log(number)