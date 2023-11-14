let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

let diff = input.length * 9
let min = N - diff
let r = 0
for(let i=min; i < N; i++) {
    let curr = ('' + i).split('').reduce((acc, cur) => acc + Number(cur), 0)

    if(i + curr === N) {
        r = i
        break
    }

}

console.log(r)
