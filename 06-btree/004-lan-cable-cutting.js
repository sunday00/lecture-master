let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [INFO, ...CABLES] = input.split('\n')

let [K, T] = INFO.split(' ').map(Number)

let result = 0
let start = 0
let end = +CABLES.reduce((a,b)=>Math.max(a,b))

while (start <= end) {
    let mid = Math.floor((start + end) / 2) // cutting cable length
    let total = 0

    for (let lc of CABLES) {
        total += Math.floor((Number(lc) / mid))
    }

    if (total < T) {
        end = mid - 1
    } else {
        start = mid + 1
        result = mid
    }
}

console.log(result)
