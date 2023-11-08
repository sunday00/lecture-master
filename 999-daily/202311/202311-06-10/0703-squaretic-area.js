let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let data = input.split('\n')
// let N = (+input)
// let DATA = input.split('\n').map(Number)
let [N, ...DATA] = input.split('\n')

// @info: logic start
// @@info: prepare for using

let c = new Array(101).fill(false)
for(let i=0; i<c.length; i++) {
    c[i] = new Array(101).fill(0)
}

let t = 0
for(let d of DATA) {
    let [x, y] = d.split(' ').map(Number)
    for(let i=y;i<y+10;i++){
        for(let j=x;j<x+10;j++){
            if(c[i][j]) continue
            else {
                c[i][j] = 1
                t++
            }
        }
    }
}

console.log(t)
