let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
// let input = fs.readFileSync('./1.txt').toString().split('\n')

let [h, m] = input[0].split(' ').map(Number)
let dur = Number(input[1])

let M = (m + dur)
m = M % 60
h = (h + Math.floor(M / 60)) % 24

console.log(`${h} ${m}`)