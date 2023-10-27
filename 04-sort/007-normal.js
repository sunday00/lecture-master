let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let ARR = input.split('')

console.log(ARR.sort((a,b) => Number(b) - Number(a)).join(''))

