let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let N = Number(input)

// @info: logic start
// @@info: prepare for using
let result = 1

for(let i=0;i<input.length/2;i++){
    if(input[i] !== input[input.length-1-i]) result = 0
}

console.log(result)
