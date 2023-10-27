let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, R, C] = input.split('\n')

let roads = R.split(' ')
let points = C.split(' ')

let prevCost = 0
let totalCost = 0
for(let i=0; i<points.length - 1; i++){
    let cost = Number(points[i])

    if(prevCost > cost || i === 0) {
        totalCost += cost * Number(roads[i])
        prevCost = cost
    } else {
        totalCost += prevCost * Number(roads[i])
    }
}

console.log(totalCost)
