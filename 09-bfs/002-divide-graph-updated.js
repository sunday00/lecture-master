let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let input = fs.readFileSync('./example.txt').toString().trim().split('\n')

let [N, ...DATA] = input
// @info: logic start
// @@info: prepare for using

class Queue {
    constructor() {
        this.items = {}
        this.headIndex = 0
        this.tailIndex = 0
    }

    en(item) {
        this.items[this.tailIndex] = item
        this.tailIndex++
    }

    de() {
        const item = this.items[this.headIndex]
        delete this.items[this.headIndex]
        this.headIndex++
        return item
    }

    peek() {
        return this.items[this.headIndex]
    }

    length() {
        return this.tailIndex - this.headIndex
    }
}

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
    let visited = new Array(Number(V) + 1).fill('X')

    function bfs(n) {
        let q = new Queue()
        q.en(n)
        visited[n] = 'B'

        while (q.length() !== 0) {
            let v = q.de()

            if(!Array.isArray(graph[v])) continue

            for(let nx of graph[v]) {
                if(visited[nx] === 'X') {
                    visited[nx] = visited[v] === 'R' ? 'B' : 'R'
                    q.en(nx)
                }
            }
        }
    }

    for(let i=1;i<=V;i++) {
        if(visited[i] === 'X') bfs(i)
    }

    let result = 'YES'

    for(let i=1;i<visited.length;i++){
        if(!Array.isArray(graph[i])) continue
        for(let y of graph[i]) {
            if (visited[i] === visited[y]) {
                result = 'NO'
            }
        }
    }

    console.log(result)

    // @end: done. go to Next case
    tl = tl + E +  1
}
