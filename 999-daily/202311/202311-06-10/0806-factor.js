let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
let [a, b] = input.split(' ').map(Number)
// let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using
let f = [1]
for(let i=2;i<=a/2;i++){
    if(a % i === 0) f.push(i)

    if(f.length === b) break
}
f.push(a)

if(f.length < b) console.log(0)
else console.log(f[b-1])
