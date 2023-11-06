let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let info = input.split('\n')

/////

let [N, M] = info[0].split(' ').map(Number)
let data = [new Array(M+1).fill(0)]
for(let i=1; i<=N;i++) {
    data.push([0, ...info[i].split(' ').map(Number)])
}

let sum = [];
for(let i=0;i<=N;i++){
    sum.push(new Array(M+1).fill(0))
}

for(let i=1; i<=N; i++) {
    for(let j=1; j<=M; j++) {
        sum[i][j] = data[i][j] + sum[i-1][j] + sum[i][j-1] - sum[i-1][j-1]
    }
}

let K = Number(info[N+1])
let q = []
for(let idx=0; idx<K; idx++) {
    let [i,j,a,b] = info[N+2+idx].split(' ').map(Number)
    q.push([i,j,a,b])
}

for(let idx = 0; idx<K;idx++) {
    let [i,j,a,b] = q[idx]
    let cur = sum[a][b] - sum[i-1][b] - sum[a][j-1] + sum[i-1][j-1]
    console.log(cur)
}