let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let N = Number(input)

// @info: logic start
// @@info: prepare for using

if(N===1) { process.exit(0)}
let r = []
let cur = N
let pushed = false
while(cur > 0) {
    for(let i=2;i<=N/2;i++) {
        if(cur % i === 0) {
            r.push(i)
            cur = cur / i
            pushed = true
            break
        }
    }
    if(!pushed) break
    else pushed = false
}

console.log(r.length ? r.join('\n') : N)

