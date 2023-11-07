let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [T, ...N] = input.split('\n')

// @info: logic start
// @@info: prepare for using

let types = [25, 10, 5, 1]
let cnts = [0,0,0,0]
for(let n of N) {
    for(let i=0;i<types.length;i++) {
        if(Number(n) >= types[i]) {
            let sub = Math.floor(n / types[i])
            cnts[i] += sub
            n -= sub * types[i]
        }
    }
    console.log(cnts.join(' '))
    cnts = [0,0,0,0]
}
