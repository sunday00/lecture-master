let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [T, N] = input.split(' ')

// @info: logic start
// @@info: prepare for using

let r = 0
for(let i=T.length-1;i>=0;i--){
    let p = Number(T[i])
    if(Number.isNaN(p)) p = T[i].charCodeAt() - 55
    r += p * (Number(N) ** (T.length - i - 1))
}

console.log(r)
