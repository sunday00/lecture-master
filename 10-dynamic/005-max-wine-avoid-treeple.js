let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let w = input.split('\n').map(Number)
// @info: logic start
// @@info: prepare for using
let N = w[0]
let data = new Array(w.length+1).fill(0)
data[1] = w[1]
if(N === 1) {
    console.log(data[1])
    process.exit(0)
}

data[2] = data[1] + w[2]
if(N === 2) {
    console.log(data[2])
    process.exit(0)
}

data[3] = Math.max(w[1]+w[2], w[1]+w[3], w[2]+w[3])
if(N === 3) {
    console.log(data[3])
    process.exit(0)
}

for(let i=4; i<=N; i++){
    data[i] = Math.max(data[i-1], w[i]+data[i-2], w[i]+w[i-1]+data[i-3])
}

console.log(data[N])


