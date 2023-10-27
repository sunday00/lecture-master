let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, DATA] = input.split('\n')

let ARR = DATA.split(' ').map(Number)
let arr = [...ARR].sort((a,b) => a - b)
let dic = new Map()

Array.from(new Set(arr)).forEach((s, i) => {
    dic.set(s, i)
})

const result = []
for (let i = 0; i < ARR.length; i++) {
    result.push(dic.get(ARR[i]))
}

console.log(result.join(' '))
