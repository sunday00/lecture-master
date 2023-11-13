let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [info, data] = input.split('\n')
// let [n, m] = info.split(' ').map(Number)

let [a,b,c,d,e,f] = input.split(' ').map(Number)

// @info: logic start
// @@info: prepare for using

let x = -999
let y = -999
for(let i=-999;i<=999; i++){
    for(let j=-999;j<=999; j++){
        if(a * i + b * j === c && d * i + e * j === f ) {
            x = i
            y = j
        }
    }
}

console.log(`${x} ${y}`)
