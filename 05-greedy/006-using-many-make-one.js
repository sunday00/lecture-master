let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let K = Number(input)

let stack = 0
let cur = 0
while(stack < K) {
    cur++
    stack += cur
}

console.log(stack === K ? cur : cur - 1)
