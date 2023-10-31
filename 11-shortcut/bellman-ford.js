let N = 6
let M = 9

// let edges = [
//     [1,2,6],
//     [1,3,2],
//     [2,3,2],
//     [2,4,2],
//     [3,5,1],
//     [4,6,2],
//     [5,2,1],
//     [5,4,3],
//     [5,6,4],
// ]

// let edges = [
//     [1,2,6],
//     [1,3,2],
//     [2,3,2],
//     [2,4,2],
//     [3,5,1],
//     [4,6,2],
//     [5,2,-2],
//     [5,4,3],
//     [5,6,4],
// ]

let edges = [
    [1,2,6],
    [1,3,2],
    [2,3,2],
    [2,4,2],
    [3,5,1],
    [4,6,2],
    [5,2,-4],
    [5,4,3],
    [5,6,4],
]

let dist = new Array(N+1).fill(Infinity)

function loop(start) {
    dist[start] = 0
    for(let i=0; i<N; i++){
        for(let j=0; j<M; j++){
            let [cur, nxt, cost] = edges[j]
            if(dist[cur] < Infinity && dist[nxt] > dist[cur] + cost) {
                dist[nxt] = dist[cur] + cost
                if(i===N-1) return true
            } // === if(dist[cur] !== Infinity){ dist[nxt] = Math.min(dist[nxt], dist[cur] + cost); if(i === N-1) return true }
        }
    }
    return false
}

let negativeCycle = loop(1)
if(negativeCycle) console.log(-1)
else {
    for(let i=2;i<=N;i++) {
        if(dist[i] === Infinity) console.log(-1)
        else console.log(dist[i])
    }
}

