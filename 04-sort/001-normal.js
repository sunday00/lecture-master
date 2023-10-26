let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let line = input.split(' ').map(Number)

console.log(line.sort((a, b) => a - b).join(' ').trim())
