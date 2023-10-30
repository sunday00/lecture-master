let fs = require('fs')

// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./example.txt').toString().trim()

let [N, B] = input.split('\n')
// @info: logic start
// @@info: prepare for using

let barns = B.split(' ').map(Number)
let data = new Array(N).fill(0)

data[0] = barns[0]
data[1] = Math.max(barns[0], barns[1])

for(let i=2;i<barns.length;i++){
    data[i] = Math.max(data[i-1], data[i-2] + barns[i])
}

console.log(data[N-1])
