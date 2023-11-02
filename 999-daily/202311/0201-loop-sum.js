let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...DATA] = input.split('\n')

// let N = (+input) / 4

// @info: logic start
// @@info: prepare for using

let i = 1
for(let d of DATA) {
    let [a, b] = d.split(' ').map(Number)

    console.log(`Case #${i}: ${a} + ${b} = ${a + b}`)

    i++
}
