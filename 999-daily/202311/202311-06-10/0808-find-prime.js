let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, M] = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using
let r = []
outer: for(let n=N;n<=M;n++) {
    if(n === 1) continue
    if(n === 2) {
        r.push(n)
        continue
    }
    if(n !== 2 && n % 2 === 0) continue

    for(let i=3;i<n/2;i++){
        if(n % i === 0) continue outer
    }

    r.push(n)
}

console.log(r.length === 0 ? -1 : `${r.reduce((ac,cu)=>ac+cu, 0)}\n${r[0]}`)
