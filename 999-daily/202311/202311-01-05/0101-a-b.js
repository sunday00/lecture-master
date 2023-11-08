let fs = require('fs')
// let input = fs.readFileSync('/dev/stdin').toString().trim()
let input = fs.readFileSync('./example.txt').toString().trim()

let [X, Y] = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

if(X > 0 && Y > 0) console.log(1)
else if(X < 0 && Y > 0) console.log(2)
else if(X < 0 && Y < 0) console.log(3)
else if(X > 0 && Y < 0) console.log(4)
