let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let N = +input

// @info: logic start
// @@info: prepare for using

let queens = []
function possible(x,y) {
    for(let [a,b] of queens) {
        if(a===x||b===y||Math.abs(a-x) === Math.abs(b-y)) return false
    }
    return true
}

let cnt = 0
function dfs(row) {
    if(row===N) cnt += 1
    for(let i=0;i<N;i++) {
        if(!possible(row, i)) continue
        queens.push([row, i])
        dfs(row + 1)
        queens.pop()
    }
}

dfs(0)

console.log(cnt)
