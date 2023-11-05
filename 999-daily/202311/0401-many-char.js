let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim()
// let input = fs.readFileSync('./example.txt').toString().trim()

// let [INFO, ...DATA] = input.split('\n')
// let word = input.split('')

// @info: logic start
// @@info: prepare for using

let max = 0
let world = input.toLowerCase()
let cnts = new Map()

for(let i=0;i<world.length;i++) {
    let cur = cnts.get(world[i])
    if (cur) cnts.set(world[i], ++cur)
    else {
        cnts.set(world[i], 1)
        cur = 1
    }

    max = Math.max(max, cur)
}

let ans = ''
cnts.forEach((v, k) => {
    if(ans !== '' && v === max) {
        console.log('?')
        process.exit(0)
    }

    if (v === max) ans = k
})

console.log(ans.toUpperCase())
