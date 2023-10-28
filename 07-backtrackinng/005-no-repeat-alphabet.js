let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
// let input = fs.readFileSync('./example.txt').toString().trim().split('\n')

// let [INFO, ...ROWS] = input.split('\n')

// @info: logic start
// @@info: prepare for using
let [r, c] = input[0].split(' ').map(Number)

let arr = []
for(let i=1;i<=r;i++) arr.push(input[i])

let dx = [-1, 1, 0, 0]
let dy = [0, 0, -1, 1]

let visited = new Array(26).fill(false)
let cnt = 0

function dfs(cur, x, y) {
    cnt = Math.max(cnt, cur)
    for(let i=0; i<4; i++) {
        let nx = x + dx[i]
        let ny = y + dy[i]


        if(nx < 0 || nx >=  r || ny < 0 || ny >= c) continue
        if(visited[arr[nx][ny].charCodeAt() - 65]) continue

        visited[arr[nx][ny].charCodeAt() - 65] = true
        dfs(cur + 1, nx, ny)
        visited[arr[nx][ny].charCodeAt() - 65] = false
    }
}

visited[arr[0][0].charCodeAt() - 65] = true
dfs(1,0,0)

console.log(cnt)

