let fs = require('fs')

// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./example.txt').toString().trim()

let N = +input
// @info: logic start
// @@info: prepare for using
let data = new Array(30801).fill(0)

for(let i=2; i<= N; i++) {
    data[i] = data[i-1] + 1
    if(i % 2 === 0) data[i] = Math.min(data[i], data[Math.floor(i/2)] + 1)
    if(i % 3 === 0) data[i] = Math.min(data[i], data[Math.floor(i/3)] + 1)
    if(i % 5 === 0) data[i] = Math.min(data[i], data[Math.floor(i/5)] + 1)
}

console.log(data[N])
