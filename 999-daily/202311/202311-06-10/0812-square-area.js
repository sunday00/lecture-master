let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...dot] = input.split('\n')

// @info: logic start
// @@info: prepare for using

let minMax = {
    minX: 10_001,
    maxX: -10_001,
    minY: 10_001,
    maxY: -10_001,
}

for(let d of dot) {
    let [x, y] = d.split(' ').map(Number)
    minMax.minX = Math.min(minMax.minX, x)
    minMax.maxX = Math.max(minMax.maxX, x)
    minMax.minY = Math.min(minMax.minY, y)
    minMax.maxY = Math.max(minMax.maxY, y)
}

console.log((minMax.maxX - minMax.minX) * (minMax.maxY - minMax.minY))
