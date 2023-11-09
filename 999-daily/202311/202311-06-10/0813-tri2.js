let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let data = input.split(' ').map(Number).sort((a,b) => a-b)

// @info: logic start
// @@info: prepare for using

let two = (data[0] + data[1])

console.log(data[2] >= two ? two * 2 - 1 : two + data[2])
