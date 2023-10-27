let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [N, DATA] = input.split('\n')

let data = DATA.split(' ').map(Number).sort((a,b)=> a-b)

let time = 0
let acc = 0
for(let i = 0; i<data.length; i++) {
    acc += data[i]
    time += acc
}

console.log(time)
