let fs = require('fs')

// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./example.txt').toString().trim()

let [N, DATA] = input.split('\n')

let sum = 0
let prefix = [0]
for(let i of DATA.split(' ')) {
    sum += Number(i)
    prefix.push(sum)
}

console.log(prefix)

let left= 4
let right= 8

console.log(prefix[right] - prefix[left - 1])