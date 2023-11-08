let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
let data = input.split('\n').map(Number)
// let N = (+input)
// let DATA = input.split('\n').map(Number)

// @info: logic start
// @@info: prepare for using
for(let c of data) {
    if(c === -1) break

    let f = [1]
    for(let i=2;i<=c/2;i++){
        if(c % i === 0) f.push(i)
    }

    let sum = f.reduce((acc,cur) => acc + cur, 0)
    if(sum === c) {
        console.log(`${c} = ${f.join(' + ')}`)
    } else {
        console.log(`${c} is NOT perfect.`)
    }
}
