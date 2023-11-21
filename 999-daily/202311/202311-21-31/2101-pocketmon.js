let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let [n, own, m, target] = input.split('\n')

// @info: logic start
// @@info: prepare for using

let d = new Map()
let k = own.split(' ')
for (let i=0;i<n;i++){
    let exists = d.get(k[i])
    if(exists) d.set(k[i], ++exists)
    else d.set(k[i], 1)
}

let t = target.split(' ')
let ans = ''
for (let i=0;i<m;i++){
    let exists = d.get(t[i])
    if(exists) ans += exists + ' '
    else ans += 0 + ' '
}

console.log(ans.trim())

