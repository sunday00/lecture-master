let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let scores = input.split('\n')

// @info: logic start
// @@info: prepare for using
function aToScore(A) {
    if (A === 'F') return 0
    let [a, f] = A.split('')
    let s0 = 4 + (65-a.charCodeAt())
    return f === '+' ? s0 + 0.5 : s0
}

let t = 0
let g = 0
for(let s of scores) {
    let ss = s.split(' ')
    if(ss[2] !== 'P') {
        g += Number(ss[1])
        let sub = aToScore(ss[2])
        t += Number(ss[1]) * sub
    }
}

console.log(t / g)
