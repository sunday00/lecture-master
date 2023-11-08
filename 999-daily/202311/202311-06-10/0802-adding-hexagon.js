let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

// console.log(1)
// console.log(1 + (6 * 1))                                    // 1 + 6 * 1
// console.log(1 + (6 * 1) + (6 * 2))                          // 1 + 6 * 3
// console.log(1 + (6 * 1) + (6 * 2) + (6 * 3))                // 1 + 6 * 6
// console.log(1 + (6 * 1) + (6 * 2) + (6 * 3) + (6 * 4))      // 1 + 6 * 10

if(N === 1) {console.log(1); process.exit(0)}
if(N > 1 && N < 7) {console.log(2); process.exit(0)}

let cur = 1
let m = 0
let M = 0
while(cur < N){
    M = M + m
    cur = 1 + (6 * M)
    m++
}

console.log(m)
