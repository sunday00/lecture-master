let fs = require('fs')

// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./example.txt').toString().trim()

let [INFO, DATA] = input.split('\n')

let [N, M] = INFO.split(' ').map(Number)
let data = DATA.split(' ').map(Number)
// @info: logic start
// @@info: prepare for using

let cnt = 0
let sub = 0

let e = 0
for(let s = 0; s < N; s++){
    while(sub < M && e < N) {
        sub += data[e]
        e++
    }
    if(sub === M) cnt++
    sub -= data[s]
}

console.log(cnt)
