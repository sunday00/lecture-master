let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let data = input.split(' ')

// @info: logic start
// @@info: prepare for using

let t = [1,1,2,2,2,8]

let ans = []
for(let i=0;i<data.length;i++) {
    ans.push(t[i] - data[i])
}

console.log(ans.join(' '))
