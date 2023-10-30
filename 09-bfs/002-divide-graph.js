let fs = require('fs')

// let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let input = fs.readFileSync('./example.txt').toString().trim().split('\n')

let [N, ...DATA] = input
// @info: logic start
// @@info: prepare for using

const Queue = require("../lib/Queue.js")

let tl = 0

for(let tc = 0; tc<N; tc++){
    const [V, E] = DATA[tl].split(' ').map(Number)

    // @info: Make graph
    let graph = new  Array(V+1).fill(null)
    for(let i=1;i<=E;i++) {
        let [x,y] = DATA[tl + i].split(' ').map(Number)
        if(!Array.isArray(graph[x])) graph[x] = []
        if(!Array.isArray(graph[y])) graph[y] = []

        graph[x].push(y)
        graph[y].push(x)
    }
    // @@info: end of graph make

    let visited = new Array(V+1).fill(0)

    function bfs() {
        const q = new Queue()

        q.en(1)
        visited[1] = -1
        let prev = -1

        while (q.length() !== 0) {
            let cur = q.de()
            for(let nx of graph[cur]){
                if(visited[nx] > 0 && nx !== prev) {
                    return false
                }
                if(visited[nx] === 0) {
                    visited[nx] = cur
                    prev = cur
                    q.en(nx)
                }
            }
        }

        return true
    }

    let result = bfs()

    console.log(result ? 'YES' : 'NO')

    // @end: done. go to Next case
    tl = E + 1
}
