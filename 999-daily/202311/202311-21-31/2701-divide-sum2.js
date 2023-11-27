let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let numbers = input.split('\n')
// @info: logic start
// @@info: prepare for using

const [c1, p1] = numbers[0].split(' ').map(Number)
const [c2, p2] = numbers[1].split(' ').map(Number)

const maximalP = p1 * p2
const maximalC = c1 * p2 + c2 * p1

function repeatDivide(a, b) {
    const r = a % b
    if(r === 0) return b
    else return repeatDivide(b, r)
}

const [small, big] = [maximalC, maximalP].sort((a,b) => a-b)
const sameIngredient = repeatDivide(big, small)

console.log(`${maximalC / sameIngredient} ${maximalP / sameIngredient}`)
