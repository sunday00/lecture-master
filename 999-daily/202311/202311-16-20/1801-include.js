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

let S = new Map()
for(let i=0;i<n;i++){
    S.set(data[i], true)
}

let ans = 0
for(let i=n; i<m+n; i++) {
    if (S.get(data[i])) ans++
}

console.log(ans)
