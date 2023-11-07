let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let data = input.split('\n')
// let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

let o = 0
let r = ''
let nullCnt = 0
outer: while(true) {
    for(let i=0;i<data.length;i++) {
        if(data[i][o]) {
            r += data[i][o]
        } else {
            nullCnt++
            if(nullCnt === data.length) break outer
        }
    }
    nullCnt = 0
    o++
}

console.log(r)
