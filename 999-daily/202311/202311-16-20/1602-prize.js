let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

// let data = input.split(' ').map(Number).sort((a,b) => a-b)
let [info, data] = input.split('\n')
let [n, k] =  info.split(' ').map(Number)
data = data.split(' ').map(Number).sort((a,b) => b-a)

// @info: logic start
// @@info: prepare for using

console.log(data[k-1])
