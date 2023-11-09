let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

let [A,B,C] = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using

if(A + B + C !==  180) {
    console.log('Error')
} else if (A === B && B === C) {
    console.log('Equilateral')
} else if (A === B || B === C || C === A) {
    console.log('Isosceles')
} else {
    console.log('Scalene')
}
