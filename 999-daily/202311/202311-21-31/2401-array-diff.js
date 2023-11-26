let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let [nm, n, m] = input.split('\n')
let [N, M] = nm.split(' ').map(Number)
let ns = n.split(' ').sort((a,b) => a-b)
let ms = m.split(' ').sort((a,b) => a-b)
// @info: logic start
// @@info: prepare for using

let nIndex = -1
let bothExistsN = 0
let bothExistsM = 0
let sameIdx = 0
for(let i=0; i<N; i++){
    for(let j=sameIdx; j<M; j++){
        if(ns[i] < ms[j]) {
            break
        }

        if(ns[i] === ms[j]) {
            bothExistsM++
            if(nIndex !== i) bothExistsN++
            nIndex = i
            sameIdx = j + 1
        }
    }
}

console.log((N - bothExistsN) + (M - bothExistsM))
