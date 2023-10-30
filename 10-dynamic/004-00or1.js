let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let N = +input
// @info: logic start
// @@info: prepare for using

let data = new Array(1000001).fill(0)
data[1] = 1 // 1
data[2] = 2 // 00 11
data[3] = 3 // 001 100 111

data[4] = 5  // 0000 1111 1001 0011 1100 1001
data[5] = 8  // 11111 11100 11001 10011 00111 10000 00100 00001
data[6] = 13 // 111111 111100 111001 110011 100111 001111
             // 110000 100100 100001 001100 001001 000011 000000
// @info:this is === fibonaci

for(let i=7; i<=N; i++){
    data[i] = (data[i-2] + data[i-1]) % 15746
}

console.log(data[N])
