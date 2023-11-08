let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
// let N = (+input)
// let DATA = input.split('\n').map(Number)
let [a, b, T] = input.split(' ').map(Number)

// @info: logic start
// @@info: prepare for using
if(a >= T) {
    console.log(1)
} else {
    let cur = Math.ceil((T - a) / (a - b))
    if(cur * (a - b) < T) {
        console.log(cur + 1)
    } else {
        console.log(cur)
    }
}

