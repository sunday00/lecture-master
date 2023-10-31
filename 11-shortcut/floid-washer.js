let N = 5
let graph = [
    [Infinity, Infinity, Infinity, Infinity, Infinity, Infinity],
    [Infinity, 0, 1, 5, Infinity, Infinity],
    [Infinity, 7, 0, 2, 2, Infinity],
    [Infinity, 2, Infinity, 0, Infinity, 6],
    [Infinity, Infinity, 2, Infinity, 0, Infinity],
    [Infinity, Infinity, Infinity, 1, Infinity, 0],
]

for(let k=1; k<=N; k++) {
    for(let s=1; s<=N; s++) {
        for(let e=1; e<=N; e++) {
            let cost = graph[s][k] + graph[k][e]
            graph[s][e] = Math.min(graph[s][e], cost)
        }
    }
}

console.log(graph)
