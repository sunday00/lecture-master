let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

// 00 10 01
// 02 11 20 30 21 12 03
// 04 13 22 31 40 50 41 32 23 14 05

let dir = [
    [-1,1], [1,-1]
]

let curDir = 0

let curPot = [0,0]

for(let i=2;i<=N;i++) {
    if(curPot[1] === 0 && curDir === 1) {
        curDir = 0
        curPot[0] = curPot[0] + 1
    }
    else if(curPot[0] === 0 && curDir === 0 ) {
        curDir = 1
        curPot[1] = curPot[1] + 1
    }
    else {
        curPot[0] = curPot[0] + dir[curDir][0]
        curPot[1] = curPot[1] + dir[curDir][1]
    }
}

console.log(`${curPot[0] + 1}/${curPot[1] + 1}`)
