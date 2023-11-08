let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
// let N = (+input)
let DATA = input.split('\n')

// @info: logic start
// @@info: prepare for using

let m = new Map()

for(let d of DATA) {
    let [x, y] = d.split(' ')

    if(m.get(`x${x}`)) m.set(`x${x}`, 2)
    else m.set(`x${x}`, 1)

    if(m.get(`y${y}`)) m.set(`y${y}`, 2)
    else m.set(`y${y}`, 1)
}

let x
let y
for(let k in Object.fromEntries(m)) {
    if(m.get(k) === 2) continue

    if(k.startsWith('x')) x = k.replace('x', '')
    if(k.startsWith('y')) y = k.replace('y', '')
}

console.log(`${x} ${y}`)
