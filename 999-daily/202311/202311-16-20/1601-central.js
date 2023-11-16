let fs = require('fs')
let input
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let data = input.split('\n').map(Number).sort((a,b) => a-b)

// @info: logic start
// @@info: prepare for using
console.log(data.reduce((acc, cur) => acc + cur, 0) / data.length)
console.log(data[Math.floor(data.length / 2)])
