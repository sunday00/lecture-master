let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [INFO, DATA] = input.split('\n')
// let data = input.split('\n').map(Number)
// let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using
let cnt = 0
outer: for(let N of DATA.split(' ')) {
    let n = Number(N)
    if(n === 1) continue
    if(n === 2) {
        cnt++
        continue
    }
    if(n !== 2 && n % 2 === 0) continue

    for(let i=3;i<n/2;i++){
        if(n % i === 0) continue outer
    }

    cnt++
}

console.log(cnt)
