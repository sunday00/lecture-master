let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let [a, b] = input.split(' ').map(Number).sort((a,b) => a-b)
// @info: logic start
// @@info: prepare for using

let currentATimes = 1
let currentBTimes = 0

let subAns = -1

while(currentATimes * a !== currentBTimes * b) {
    currentBTimes++
    let start = currentATimes
    for(let i=start;a*i <= b*currentBTimes; i++) {
        if(a*i === b*currentBTimes) subAns = a * i
        currentATimes = i
    }
}

console.log(subAns)

