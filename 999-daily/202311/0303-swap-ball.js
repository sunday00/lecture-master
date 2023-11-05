let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let N = Number(input)
let [INFO, ...DATA] = input.split('\n')
// let DATA = input.split('\n')

// @info: logic start
// @@info: prepare for using
let [N, M] = INFO.split(' ').map(Number)
let basket = new Array(N).fill(0)
for(let i=1;i<=N;i++) {
    basket[i] = i
}

for(let d of DATA) {
    let [i, j] = d.split(' ').map(Number)
    let tmp1 = basket[i]
    let tmp2 = basket[j]
    basket[j] = tmp1
    basket[i] = tmp2
}

console.log(basket.join(' ').replace('0 ', ''))
