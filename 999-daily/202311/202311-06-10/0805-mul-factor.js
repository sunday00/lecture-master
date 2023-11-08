let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let data = input.split('\n')
// let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

let cur = ''
let idx = 0
while(cur !== '0 0') {
    cur = data[idx]

    let [a, b] = cur.split(' ').map(Number)
    if(a > b) {
        console.log(a % b === 0 ? 'multiple' : 'neither')
    } else {
        console.log(b % a === 0 ? 'factor' : 'neither')
    }

    idx++
    cur = data[idx]
}
