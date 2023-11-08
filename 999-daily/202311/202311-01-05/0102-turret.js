let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, ...DATA] = input.split('\n')

// @info: logic start
// @@info: prepare for using
for(let data of DATA) {
    let [ x1,y1,r1, x2,y2,r2 ] = data.split(' ').map(Number)
    let d = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

    if(x1 === x2 && y1 === y2 && r1 === r2) {
        console.log(-1)
    } else if (r1 + r2 === d || Math.abs(r1 - r2) === d) {
        console.log(1)
    } else if (r1 + r2 < d || Math.abs(r1 - r2) > d) {
        console.log(0)
    } else if (r1 + r2 > d || Math.abs(r1 - r2) < d) {
        console.log(2)
    }
}
