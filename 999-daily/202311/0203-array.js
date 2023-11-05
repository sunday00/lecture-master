let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [INFO, ...DATA] = input.split('\n')
// let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

let [N, M] = INFO.split(' ').map(Number)

let baskets = Object.keys(new Array(N+1).fill(0)).map(Number)

for(let d of DATA) {
    let [i, j] = d.split(' ').map(Number)
    let head = baskets.slice(0, i)
    let body = baskets.slice(i, j+1).reverse()
    let tail = baskets.slice(j+1, baskets.length)

    baskets = [...head, ...body, ...tail]
}

console.log(baskets.join(' ').replace('0 ', ''))
