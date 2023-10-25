let fs = require('fs')
let n = fs.readFileSync('/dev/stdin').toString().split('\n')[1].split(' ').map(Number)
// let n = fs.readFileSync('./example.txt').toString().split('\n')[1].split(' ').map(Number)

console.log(`${Math.min(...n)} ${Math.max(...n)}`)