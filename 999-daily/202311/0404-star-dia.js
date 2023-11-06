let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let N = Number(input)

// @info: logic start
// @@info: prepare for using

let ans = []
let starLen = -1
for(let i=1;i<=N;i++){
    starLen += 2
    let space = N * 2 - 1 - starLen
    ans.push(' '.repeat(space / 2) + '*'.repeat(starLen))
}
for(let i=N-1;i>0;i--){
    starLen -= 2
    let space = N * 2 - 1 - starLen
    ans.push(' '.repeat(space / 2) + '*'.repeat(starLen))
}

console.log(ans.join('\n'))
