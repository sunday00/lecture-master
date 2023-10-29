let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let input = fs.readFileSync('./example.txt').toString().trim().split('\n')

let [INFO, ...DATA] = input

// @info: logic start
// @@info: prepare for using
let [N, Tcnt] = INFO.split(' ').map(Number)
let data = new Array(N+1).fill(false)

for(let i=0; i<N-1; i++) {
    const [x, y, d] = DATA[i].split(' ').map(Number)
    if(!Array.isArray(data[x])) {
        data[x] = new Array(N + 1).fill(null)
    }

    if(!Array.isArray(data[y])) {
        data[y] = new Array(N + 1).fill(null)
    }

    data[x][y] = d
    data[y][x] = d
}

let visited = new Array(N + 1).fill(false)
// @@info: prepared data and visited

let targetLine = N
let target = input[N]?.split(' ')

while(Array.isArray(target)) {
    let [S, E] = target.map(Number)
    let distance = Infinity

    function dfs(s, d) {
        if(visited[s]) return
        if(s === E) {
            distance = Math.min(d, distance)
            return
        }

        for(let i=1;i<data[s].length;i++){
            if (data[s][i] && !visited[s]) {
                visited[s] = true
                dfs(i, d+data[s][i])
                visited[s] = false
            }
        }
    }

    dfs(S, 0);

    console.log(distance)

    target = input[++targetLine]?.split(' ')
}
