let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [T, ...CASES] = input.split('\n')

// @info: logic start
// @@info: prepare for using

function solution(C, R, cnt, DATA) {
    function dfs(graph, n, m, x, y) {
        if(x<=-1||x>=n||y<=-1||y>=m) return false

        if(graph[x][y] === true) {
            graph[x][y] = -1
            dfs(graph,n,m, x-1, y)
            dfs(graph,n,m, x+1, y)
            dfs(graph,n,m, x, y-1)
            dfs(graph,n,m, x, y+1)
            return true
        }
        return false
    }

    let answer = 0
    for(let i=0;i<C;i++){
        for(let j=0;j<R;j++) {
            if(dfs(DATA, C, R, i, j)) answer++
        }
    }
    console.log(answer)
}

function generateData(start, cnt, C, R) {
    const d = []

    for(let i=0;i<C;i++){
        d.push([])
        for(let j=0;j<R;j++){
            d[i][j] = false
        }
    }

    for(let i=start; i<start+cnt; i++){
        let [x,y]=CASES[i].split(' ')
        d[x][y] = true
    }
    return d
}

let caseInfo = 0
for(let i=0;i<T;i++){
    let [C, R, cnt] = CASES[caseInfo].split(' ')

    let data = generateData(caseInfo+1, Number(cnt), C, R)
    solution(C, R, cnt, data)

    caseInfo += Number(cnt) + 1
}
