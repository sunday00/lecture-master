let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [NK, ...coinTypes] = input.split('\n')

let sum = 0
let totalCnt = 0

let [N, K] = NK.split(' ').map(Number)

while (sum < K) {
    for (let i = coinTypes.length - 1; i >= 0; i--) {
        const coin = Number(coinTypes[i])
        const cnt = Math.floor((K - sum) / coin)

        sum += coin * cnt
        totalCnt += cnt
    }
}

console.log(totalCnt)
