let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, B, ...DATA] = input.split('\n')
// @info: logic start
// @@info: prepare for using

let graph = new Array(Number(N)).fill(null)
for(let i=0; i<Number(N); i++) {
    graph[i] = new Array(Number(N)).fill(Infinity)
    graph[i][i] = 0
}

for(let b=0;b<Number(B);b++) {
    let [i,j,c] = DATA[b].split(' ').map(Number)
    graph[i-1][j-1] = Math.min(Number(c), graph[i-1][j-1])
}

for(let k=0; k<N; k++) {
    for(let s=0; s<N; s++) {
        for(let e=0; e<N; e++) {
            let cost = graph[s][k] + graph[k][e]
            graph[s][e] = Math.min(graph[s][e], cost)
        }
    }
}

for(let k=0; k<N; k++) {
    console.log(graph[k].join(' ').replaceAll('Infinity', '0'))
}

