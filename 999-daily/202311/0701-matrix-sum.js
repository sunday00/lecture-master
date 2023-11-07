let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [INFO, ...DATA] = input.split('\n')
// let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

let [N, M] = INFO.split(' ').map(Number)

for(let i=0;i<N;i++) {
    let d1 = DATA[i].split(' ')
    let d2 = DATA[N+i].split(' ')

    let row = []
    for(let j=0; j<M; j++) {
        row.push(Number(d1[j]) + Number(d2[j]))
    }

    console.log(row.join(' '))
}

