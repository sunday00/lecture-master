const PriQue = require('../lib/Pqueue')

let N = 7
let graph = [
    [],
    [[2,3],[3,1],[4,2]],
    [[1,3],[3,1],[5,1]],
    [[1,1],[2,1],[4,3],[6,5]],
    [[1,2],[3,3],[7,1]],
    [[2,1],[6,2]],
    [[3,5],[5,2]],
    [[4,1]],
]

let distance = new  Array(graph.length).fill(Infinity)

// @info: logic start
// @@info: prepare for using
let start = 1

function dijkstra () {
    let pq = new PriQue((a,b) =>  b[0] - a[0])
    pq.enq([0, start])
    distance[start] = 0

    while (pq.size() !== 0) {
        let [dist, now] = pq.deq()

        if(distance[now] < dist) continue

        for(let i of graph[now]) {
            let cost = dist + i[1]
            if(cost < distance[i[0]]) {
                distance[i[0]] = cost
                pq.enq([cost, i[0]])
            }
        }
    }
}

dijkstra()

for(let i=1; i<=N; i++) {
    console.log(`${start} ~ ${i} : `, distance[i])
}
