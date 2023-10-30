let fs = require('fs')

// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('./example.txt').toString().trim().split('\n')

let [N, ...DATA] = input
// @info: logic start
// @@info: prepare for using

const Queue = require("../lib/Queue.js")

let graph = new Array(DATA.length).fill(null)
let visited = new Array(Number(N) + 1).fill(0)

for(let i=0;i<input.length;i++){
    let [x,y] = input[i].split(' ').map(Number)
    if(!Array.isArray(graph[x])) graph[x] = []
    if(!Array.isArray(graph[y])) graph[y] = []
    graph[x].push(y)
    graph[y].push(x)
}

function bfs(graph, s, e) {
    let q = new Queue()
    q.en(s)

    while(q.length() !== 0) {
        let v = q.de()
        if(v === e) {
            return visited[v]
        }

        for(let i of graph[v]) {
            if(visited[i] === 0) {
                q.en(i)

                visited[i] = visited[v] + 1
            }
        }
    }
}

console.log(bfs(graph, 1, 8))
