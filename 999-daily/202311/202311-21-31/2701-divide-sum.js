let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let numbers = input.split('\n')
// @info: logic start
// @@info: prepare for using
function minimalSameMul(a,b){
    if(a === b) return a

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

    return subAns
}

function divideAns(child, parent) {
    if(parent % child === 0) {
        const times = parent / child

    }
}

const [c1, p1] = numbers[0].split(' ').map(Number)
const [c2, p2] = numbers[1].split(' ').map(Number)

const [sortedP1, sortedP2] = [p1, p2].sort((a,b) => a-b)

const mul = minimalSameMul(sortedP1, sortedP2)
const times1 = mul / p1
const times2 = mul / p2

const ansChild = times1 * c1 + times2 * c2



console.log(`${ansChild} ${mul}`)

