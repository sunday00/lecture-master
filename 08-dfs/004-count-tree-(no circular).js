let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let input = fs.readFileSync('./example.txt').toString().trim().split('\n')

// @info: logic start
// @@info: prepare for using

let caseNo = 1
let caseLine = 0
while(input[caseLine] !== '0 0') {
    let [N, L] = input[caseLine].split(' ').map(Number)

    // @@info: start of data
    let data = new Array(N+1).fill(null)
    for(let i=0; i<L; i++) {
        const [x,y] = input[caseLine+i+1].split(' ').map(Number)

        if(!Array.isArray(data[x])) data[x] = []
        if(!Array.isArray(data[y])) data[y] = []
        data[x].push(y)
        data[y].push(x)
    }

    let visited = new Array(N).fill(false)
    let done = new Array(N).fill(false)
    // @@info: end of data

    let cnt = 0
    function dfs(s, prev) {
        done[s] = true
        if(visited[s]) return 1

        for(let i=0; i<data[s].length; i++) {
            visited[s] = true
            if(visited[data[s][i]] && data[s][i] !== prev) {
                return false
            }
            if(!dfs(data[s][i], s)) return false
            visited[s] = false
        }

        return true
    }

    for(let i=1; i<=N; i++) {
        if(done[i]) continue
        if(data[i] === null) {
            cnt++
            continue
        }
        if(dfs(i, 0)) cnt++
    }

    if(cnt === 0) {
        console.log(`Case ${caseNo}: No trees.`)
    } else if(cnt === 1) {
        console.log(`Case ${caseNo}: There is one tree.`)
    } else {
        console.log(`Case ${caseNo}: A forest of ${cnt} trees.`)
    }

    caseNo++
    caseLine += L+1
}
