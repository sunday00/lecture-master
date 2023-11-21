let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let [nm, ...data] = input.split('\n')
let [n, m] = nm.split(' ').map(Number)
// @info: logic start
// @@info: prepare for using

let d = new Map()
for(let i=0; i<n; i++) {
    d.set(data[i], true)
}

let cnt = 0
let ans = []
for(let i=n; i<data.length;i++) {
    if(d.get(data[i])) {
        cnt++
        ans.push(data[i])
    }
}

console.log(cnt)
console.log(ans.sort().join('\n'))
