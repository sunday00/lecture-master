let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let input = fs.readFileSync('./example.txt').toString().trim().split('\n')

let [N, M, ...C] = input

// @info: logic start
// @@info: prepare for using

let graph = []
for(let i=1; i<=N; i++) graph[i] = []
for(let i=0; i<M; i++) {
    let [x,y] = C[i].split(' ').map(Number)

    graph[x].push(y)
    graph[y].push(x)
}

let cnt = 0
let visited = new Array(Number(N)+1).fill(false)
function dfs(x) {
    visited[x] = true
    cnt++
    for(let y of graph[x]) {
        if(!visited[y]) dfs(y)
    }
}

dfs(1)
console.log(cnt - 1)
