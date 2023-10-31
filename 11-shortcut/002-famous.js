let fs = require('fs')

let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...DATA] = input.split('\n')
// @info: logic start
// @@info: prepare for using

let graph = new Array(Number(N)).fill(null)
for(let i=0;i<Number(N);i++) {
    graph[i] = new Array(Number(N)).fill('N')
    for(let j=0;j<Number(N);j++) {
        if(DATA[i][j] === 'Y') {
            graph[i][j] = 1
            for(let z=0; z<Number(N); z++){
                if(z === i || z === j) continue
                if(DATA[j][z] === 'Y' && graph[i][z] !== 1) {
                    graph[i][z] = 2
                }
            }
        }
    }
}

let result = 0
for(let i=0;i<Number(N);i++) {
    result = Math.max(result, graph[i].join('').replaceAll('N', '').length)
}
console.log(result)
