let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [INFO, ARR] = input.split('\n')

let K = Number(INFO.split(' ')[1])
let arr = ARR.split(' ').map(Number).sort((a,b)=> a - b)

console.log(arr[K-1])
