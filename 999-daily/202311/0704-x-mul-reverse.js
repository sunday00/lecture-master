let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [T, N] = input.split(' ').map(Number)

// @info: logic start
// @@info: prepare for using
let r = ''
while(T > 0) {
    if(T % N < 10) {
        r = T % N +  r
    } else {
        r = String.fromCharCode((T % N) + 55) + r
    }

    T = Math.floor(T / N)
}

console.log(r)
