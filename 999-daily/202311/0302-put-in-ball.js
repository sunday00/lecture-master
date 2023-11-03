let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let N = Number(input)
let [INFO, ...DATA] = input.split('\n')
let [N, M] = INFO.split(' ').map(Number)

let baskets = new Array(N).fill(0)

for(let d of DATA) {
    let [i, j, k] = d.split(' ').map(Number)

    for(let ii=i-1;ii<j;ii++) {
        baskets[ii] = k
    }
}

console.log(baskets.join(' '))
