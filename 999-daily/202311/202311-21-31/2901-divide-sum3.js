let fs = require('fs')
if(fs.existsSync('./example.txt')) {
    input = fs.readFileSync('./example.txt').toString().trim()
} else {
    input = fs.readFileSync('/dev/stdin').toString().trim()
}

let [n, ...data] = input.split('\n')
// @info: logic start
// @@info: prepare for using

function repeatDivide(a, b) {
    const r = a % b
    if(r === 0) return b
    else return repeatDivide(b, r)
}

let diffs = new Map()

for(let i=0;i<data.length-1;i++) {
    let diff = data[i+1] - data[i]
    let already = diffs.get(diff)
    if(already) diffs.set(diff, already + 1)
    else diffs.set(diff, 1)
}

let arr = Array.from(diffs.keys())
let r = arr[0]

for(let i=1;i<arr.length;i++){
    r =  repeatDivide(r, arr[i])
}

let m = 0
for(let i=0;i<arr.length;i++){
    m += (arr[i] / r - 1) * diffs.get(arr[i])
}

console.log(m)
