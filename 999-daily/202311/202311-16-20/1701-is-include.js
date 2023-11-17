let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

// let data = input.split(' ').map(Number).sort((a,b) => a-b)
let [n, has, m, data] = input.split('\n')

// @info: logic start
// @@info: prepare for using

let mapHas = new Map()
for(let h of has.split(' ')) {
    mapHas.set(h, true)
}

let ans = []
for(let d of data.split(' ')) {
    ans.push(mapHas.get(d) ? 1 : 0)
}

console.log(ans.join(' '))
