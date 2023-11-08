let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [N, ...DATA] = input.split('\n')
// let N = (+input)
let DATA = input.split('\n')

// @info: logic start
// @@info: prepare for using

for(let i=0; i<DATA.length; i++) {
    let [a, b] = DATA[i].split(' ').map(Number)
    console.log(a + b)
}
