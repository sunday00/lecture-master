let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, BALLOONS] = input.split('\n')

let balloons = BALLOONS.split(' ').map(Number)

let cnt = 0
let arrows = Array(balloons.length).fill(0)

for(let i=0;i<balloons.length;i++){
    if(arrows[balloons[i]] > 0) {
        arrows[balloons[i]] -= 1
        arrows[balloons[i] - 1] += 1
    } else {
        arrows[balloons[i] - 1] += 1
        cnt++
    }
}

console.log(cnt)

